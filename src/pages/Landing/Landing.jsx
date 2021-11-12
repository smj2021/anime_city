import styles from './Landing.module.css'
import AnimeResults from '../AnimeResults/AnimeResults'
import React, { Component } from 'react';

class Landing extends Component {
  state = {
    topAnimes: []
  }

  componentDidMount() {
    fetch('https://api.jikan.moe/v3/top/anime')
      .then(res => res.json())
      .then(json => {
          this.setState({
            topAnimes: json.top.slice(0, 9)
          });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <main className={styles.container}>
        <h1>{this.props.user ? `Welcome to Anime City, ${this.props.user.name}!` : 'Welcome to Anime City!'}</h1>
        {(this.props.animes) ? <AnimeResults animes={this.props.animes.results} /> : <AnimeResults animes={this.state.topAnimes} />}
      </main>
    );
  }
}

export default Landing;