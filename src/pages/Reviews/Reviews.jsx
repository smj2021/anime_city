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
            <>
            <div>Add Review
                <form action="">

                    
                </form>
            </div>
            </>
        )
    }
}














export default Review
