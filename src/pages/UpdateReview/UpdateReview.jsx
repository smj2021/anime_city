import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateReview extends Component{
    state = {
        invalidForm: false,
        formData: this.props.location.state.review
    };

    
}