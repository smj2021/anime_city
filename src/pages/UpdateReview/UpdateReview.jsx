import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

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
        const formData = { ...this.state.formData, [e.target.content]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render(){
        console.log()
        const { content } = this.state.formData
        return (
            <>
                
            </>
        )
    }
}

export default UpdateReview;