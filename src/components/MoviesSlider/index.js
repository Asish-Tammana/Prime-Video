/* eslint-disable no-unused-vars */
import Slider from 'react-slick'
import {Component} from 'react'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class MovieSlider extends Component {
  render() {
    const {actionMovies, comedyMovies} = this.props
    console.log(comedyMovies)
    console.log(actionMovies)

    let givenList

    if (comedyMovies === undefined) {
      givenList = actionMovies
    } else {
      givenList = comedyMovies
    }

    const settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
    }

    return (
      <Slider {...settings}>
        {givenList.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    )
  }
}

export default MovieSlider
