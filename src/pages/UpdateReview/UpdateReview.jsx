import React, { Component } from 'react';

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
    };

    handleChange = (e) => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render(){
        const { content } = this.state.formData
        return (
            <>
                <h1>Edit Review</h1>
            </>
        )
    }
}

export default UpdateReview;