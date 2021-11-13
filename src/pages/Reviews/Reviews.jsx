import React, { useState, useEffect, Component } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as reviewsService from '../../services/reviews';
import UpdateReview from '../UpdateReview/UpdateReview';

class Review extends Component {
    state = {
        invalidForm: true,
        formData: {
            content: ''
        },
        reviews: []
    };
    formRef = React.createRef();

    // componentDidMount() {
    //     this.fetchReviews();
    // }

    fetchReviews() {
        fetch('http://localhost:3001/api/reviews')
            .then(res => res.json())
            .then(json => this.setState({
                reviews: json
            }));
    }

    handleSubmit = (e) => {
        console.log(this.props)
        e.preventDefault();
        console.log(e.target.querySelector('textarea').value)
        fetch("http://localhost:3001/api/reviews/animeId", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                content: e.target.querySelector('textarea').value,
                id: this.props.animeDetails.mal_id,
                name: this.props.animeDetails.title
            })
        })
            .then(res => res.json())
            .then(res => this.fetchReviews())
            .catch(err => console.log(err))
    };

    handleChange = (e) => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity
        })
    }

    handleUpdateReview = async updatedReviewData => {
		const updatedReview = await reviewsService.update(updatedReviewData);
		const newReviewsArray = this.state.reviews.map(review => review._id === updatedReview._id ? updatedReview : review);
        this.setState(
            { reviews: newReviewsArray},
            () => this.props.history.push('/')
        );
	}


    render() {
        console.log('reviews are:', this.state.reviews)
        const { content } = this.state.formData;
        return (
            <>
                <Route exact path='/update' render={({ location }) => 
                    <UpdateReview 
                        handleUpdateReview={this.handleUpdateReview}
                        location={location} 
                    />
                } />	

                Add Review
                <div>
                    <form ref={this.formRef} autocomplete='off'
                        onSubmit={this.handleSubmit}>
                        <label htmlFor="reviewInput"
                            className="form-label"></label>
                        <textarea
                            type="text"
                            className=""
                            id="contentInput"
                            name="content"
                            value={content}
                            onChange={this.handleChange} cols="30" rows="5" />
                        <div>
                            <Button type="submit"
                                className=""
                                disabled={this.state.invalidForm}>Add a Review
                            </Button>
                        </div>
                    </form>
                    <h3>Reviews:</h3>
                    {this.state.reviews.map((review, idx) => {
                        return <p>{parseInt(review.id) === this.props.animeDetails.mal_id ? review.content : ''}
                            <Link
                                className='btn btn-sm btn-warning'
                                to={{
                                    pathname: '/update',
                                    state: { review }
                                }}
                            >
                                Update
                            </Link>
                        </p>
                        // console.log(this.props.animeDetails.mal_id, review.id)
                    })}
                </div>
            </>
        )
    }
}

export default Review