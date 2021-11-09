import React, { Component } from 'react';

class List extends Component {
    constructor() {
        super();

        this.state = {
            lists: 0
        }
    }

    createList = () => {
        this.setState({ lists: this.state.lists + 1 });
    }
    
}