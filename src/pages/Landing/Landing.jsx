import styles from './Landing.module.css'
import AnimeResults from '../AnimeResults/AnimeResults'
import React, { Component } from 'react';

class Landing extends Component {
  state = {
    
  }

  render() {
    return (
      <main className={styles.container}>
        <h1>{this.props.user ? `Welcome to Anime City, ${this.props.user.name}!` : 'Welcome to Anime City!'}</h1>
        {(this.props.animes) ? <AnimeResults animes={this.props.animes.results} /> : ''}

        

    </main>
    );
  }
}

export default Landing;