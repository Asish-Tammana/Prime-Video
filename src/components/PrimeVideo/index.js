import {Component} from 'react'
import MovieSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    const actionMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )

    const comedyMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )

    return (
      <div className="bg-container">
        <img
          className="prime-video"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <div className="bottom-section">
          <h1>Action Movies</h1>
          <div className="slider-container">
            <MovieSlider actionMovies={actionMovies} />
          </div>
          <h1>Comedy Movies</h1>
          <div className="slider-container">
            <MovieSlider comedyMovies={comedyMovies} />
          </div>
        </div>
      </div>
    )
  }
}
export default PrimeVideo
