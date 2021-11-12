import React, { useState, useEffect, Component } from 'react';

class Review extends Component {
    state = {
        invalidForm: true,
        formData: {
            content: ''
        }
    };
    formRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddReview(this.state.formData)
    };

    handleChange = (e) => {
        const formData = { ... this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity
        })
    }

    render() {
        const { content } = this.state.formData;
        return (
            <>Add Review
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
                        <button type="submit"
                            className=""
                            disabled={this.state.invalidForm}>Add a Review</button>
                    </div>
                </form>
            </>
        )
    }
}













export default Review