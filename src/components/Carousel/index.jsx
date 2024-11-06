import React, { useState } from 'react'
import arrowPrev from '../../assets/img/arrow-prev-big.png'
import arrowNext from '../../assets/img/arrow-next-big.png'
import './Carousel.scss'

const Carousel = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button onClick={goToPrevious} className="carousel__control-right" aria-label="Go to previous image">
            <img src={arrowPrev} alt="Previous" className="carousel__left-icon" />
          </button>
        </>
      )}
      <div className="carousel__image-container">
        <img src={pictures[currentIndex]} alt={`Carousel: ${title}`} className="carousel__image" />
      </div>
      {pictures.length > 1 && (
        <>
          <button onClick={goToNext} className="carousel__control-left" aria-label="Go to next image">
            <img src={arrowNext} alt="Next" className="carousel__right-icon" />
          </button>
          <p className="carousel__counter">
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  )
}

export default Carousel
