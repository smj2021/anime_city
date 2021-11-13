import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateReview extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.review
    };

    formRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleUpdateReview(this.state.formData);
    };

    handleChange = (e) => {
        const formData = { ...this.state.formData, [e.target.content]: e.target.value }
    }
}

export default UpdateReview;