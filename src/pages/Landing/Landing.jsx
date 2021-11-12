import styles from './Landing.module.css'
import AnimeResults from '../AnimeResults/AnimeResults'

const Landing = (props) => {
  return (
    <main className={styles.container}>
      <h1>{props.user ? `Welcome to Anime City, ${props.user.name}!` : 'Welcome to Anime City!'}</h1>
      {(props.animes) ? <AnimeResults animes={props.animes.results} /> : ''}
    </main>
  )
}
 
export default Landing