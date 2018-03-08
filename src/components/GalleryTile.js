import React, { Component } from 'react'
import Photo from './Photo'

class GalleryTile extends Component {
  render() {
    return (
      <div className="gallery-galleryTile">
        <Photo src={this.props.src} />
      </div>
    )
  }
}

export default GalleryTile