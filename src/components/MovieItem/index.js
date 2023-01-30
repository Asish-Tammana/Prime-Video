/* eslint-disable react/self-closing-comp */
import {Component} from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

class MovieItem extends Component {
  render() {
    const {movieDetails} = this.props

    return (
      <Popup
        modal
        trigger={<img src={movieDetails.thumbnailUrl} alt="thumbnail" />}
      >
        {close => (
          <div className="pop-up-container">
            <div data-testid="closeButton" className="popup-top-container">
              <IoMdClose onClick={() => close()} />
            </div>
            <div>
              <ReactPlayer
                controls
                url={movieDetails.videoUrl}
                className="video-container"
              />
            </div>
          </div>
        )}
      </Popup>
    )
  }
}
export default MovieItem
