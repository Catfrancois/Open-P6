import React, { useEffect, useState } from 'react'
import Dropdown from '../../components/Dropdown'
import { useLocation, useNavigate } from 'react-router-dom'
import './Announcement.scss'
import activeStar from '../../assets/img/star-active.png'
import inactiveStar from '../../assets/img/star-inactive.png'
import arrowPrev from '../../assets/img/arrow-prev-big.png'
import arrowNext from '../../assets/img/arrow-next-big.png'

const Announcement = () => {
  const location = useLocation()
  const {
    id,
    pictures,
    title,
    description,
    host,
    tags,
    equipments,
    location: loc,
    rating,
  } = location.state || {}

  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!id) {
      navigate('*', { replace: true })
    }
  }, [id, navigate])

  if (!id) {
    return null
  }

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

  const starRating = (rating) => {
    const starNumber = rating
    let i = 0;
    const stars = [];

    while (i < 5) {
      stars.push(
        <img
          key={i}
          src={i < starNumber ? activeStar : inactiveStar}
          alt="star"
          className='announcement__star'
        />
      );
      i++;
    }

    return <div className="announcement__stars">{stars}</div>;
  };

  const tagList = tags.map(tag => <p className="announcement__tag">{tag}</p>)

  const [firstName, lastName ] = host.name.split(" ")

  return (
    <main className="announcement">

      <div className="announcement__carousel">
        <button
          onClick={goToPrevious}
          className="announcement__carousel-control-right"
        >
          <img
            src={arrowPrev}
            alt="Previous"
            className="announcement__left-icon"
          />
        </button>
        <div className="announcement__image-container">
          <img
            src={pictures[currentIndex]}
            alt={title}
            className="announcement__image"
          />
        </div>
        <button onClick={goToNext} className="announcement__carousel-control-left">
          <img
            src={arrowNext}
            alt="Next"
            className="announcement__right-icon"
          />
        </button>
      </div>

      <div className="announcement__details">
        <div className="announcement__details-location">
          <h1 className="announcement__title">{title}</h1>
          <p className="announcement__location">{loc}</p>
          <div className="announcement__tags">{tagList}</div>
        </div>

        <div className="announcement__details-host">
          <div className="announcement__info">
            <div>
              <p className="announcement__host-name">{firstName}</p>
              <p className="announcement__host-name">{lastName}</p>
            </div>

            <img
              src={host.picture}
              alt={host.name}
              className="announcement__host-picture"
            />
          </div>

          {starRating(rating)}
        </div>
      </div>
      <div className="announcement__dropdown">
        <Dropdown
          title="Description"
          content={description}
          className="announcement__dropdown-description"
        />
        <Dropdown
          title="Equipments"
          content={equipments}
          className="announcement__dropdown-equipments"
        />
      </div>
    </main>
  )
}

export default Announcement