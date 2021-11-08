import styles from './Landing.module.css'
import AnimeResults from '../AnimeResults/AnimeResults'

const Landing = (props) => {
  console.log(props);
  return (
    <main className={styles.container}>
      {(props.animes) ? <AnimeResults animes={props.animes.results} /> : ''}
    </main>
  )
}
 
export default Landing