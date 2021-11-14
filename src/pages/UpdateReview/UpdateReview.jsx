import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class UpdateReview extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.review
    };

    formRef = React.createRef();

    handleSubmit = (e) => {
        console.log(this.props)
        e.preventDefault();
        this.props.handleUpdateReview(this.state.formData);
        // this.props.history.push('/anime')
        this.props.history.goBack()
    };

    handleChange = (e) => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render(){
        console.log('history is: ', this.props.history);
        const { content } = this.state.formData
        return (
            <>
                <h1>Edit Review</h1>
                <form 
                    ref={this.formRef} 
                    autocomplete='off'
                    onSubmit={this.handleSubmit}
                >
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
                        <Button 
                            type="submit"
                            className=""
                            to="/anime"
                            disabled={this.state.invalidForm}
                        >
                            Update Review
                        </Button>
                    </div>
                </form>
            </>
        )
    }
}

export default UpdateReview;