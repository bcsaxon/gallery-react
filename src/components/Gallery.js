import React, { Component } from 'react'
import GalleryControls from './GalleryControls'
import GalleryTiles from './GalleryTiles'

class Gallery extends Component {

  constructor(props) {
    super(props)
    const photosToLoad = 50
    let photos = this.makePhotosArray(photosToLoad)
    photos = this.sortPhotos(photos)
    this.state = {photos}
  }

  componentDidMount() {
    // setTimeout(() => {this.someCallThatAddsPhotos()}, 15000)
  }

  sortPhotos(photos) {
    photos.sort((a, b) => { return b.timestamp - a.timestamp })
    return photos
  }

  someCallThatAddsPhotos() {
    this.setState((prevState, props) => {
      return {photos: prevState.photos.concat(this.makePhotosArray(25))}
    })
  }

  makePhotosArray(numberToMake) {
    let photos = []
    for(let i = 0; i < numberToMake; i++) {
      const cachebust = Math.random().toString(36).substr(2, 5)
      photos.push({
        url: `https://thecatapi.com/api/images/get?cachebust=${cachebust}`,
        timestamp: new Date(Date.now() + ~~(Math.random() * 2000000))
      })
    }
    return photos
  }

  render() {
    return (
      <div className="gallery">
        <GalleryControls photos={this.state.photos} />
        <GalleryTiles photos={this.state.photos} />
      </div>
    )
  }
}

export default Gallery