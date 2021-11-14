import React, { Component } from 'react';
import * as toWatchService from '../../services/toWatch'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ToWatch extends Component {
    state = {
        profile: {}
    }

    componentDidMount() {
        this.fetchProfile();
    }

    handleDeleteWatch = id => {
        toWatchService.deleteOne(id)
        .then(this.fetchProfile())
    }

    fetchProfile() {
        // it's port 3001 because that's the port our server is listening to
        fetch('http://localhost:3001/api/to-watch', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    profile: json
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>To Watch</h1>
                {/* render gets called before we fetch so we first need to check we have the data before we map */}
                {
                this.state.profile.toWatch && this.state.profile.toWatch.map((watch, idx) => (
                    <div key={idx}>
                        <h3>{watch.title}</h3>
                        <img src={watch.image} alt="" />
                        <br />
                        <Button onClick={() => {this.handleDeleteWatch(watch._id)}}>
                            Remove
                        </Button>
                    </div>
                ))
                }
            </div>
        );
    }
}

export default ToWatch;