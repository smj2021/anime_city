import React, { useState, useEffect, Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Review extends Component {
    state = {
        invalidForm: true,
        formData: {
            content: ''
        }
    };
    formRef = React.createRef();

    componentDidMount() {
        fetch('http://localhost:3001/api/reviews')
            .then(res => res.json())
            .then(json => console.log('REVIEWS JSON IS: ', json))
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
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    handleChange = (e) => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity
        })
    }



    render() {
        const { content } = this.state.formData;
        return (
            <>Add Review
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
                    <h1>Reviews will go here</h1>
                </div>
            </>
        )
    }
}

export default Review