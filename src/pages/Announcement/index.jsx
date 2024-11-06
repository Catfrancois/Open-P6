import React, { useEffect } from 'react'
import Dropdown from '../../components/Dropdown'
import Carousel from '../../components/Carousel'
import { useLocation, useNavigate } from 'react-router-dom'
import './Announcement.scss'
import activeStar from '../../assets/img/star-active.png'
import inactiveStar from '../../assets/img/star-inactive.png'

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

  useEffect(() => {
    if (!id) {
      navigate('*', { replace: true })
    }
  }, [id, navigate])

  if (!id) {
    return null
  }

  const starRating = (rating) => {
    const starNumber = rating
    let i = 0
    const stars = []

    while (i < 5) {
      stars.push(
        <img
          key={i}
          src={i < starNumber ? activeStar : inactiveStar}
          alt="star"
          className='announcement__star'
        />
      )
      i++
    }

    return <div className="announcement__stars">{stars}</div>
  }

  const tagList = tags.map((tag, index) => (
    <p key={index} className="announcement__tag">{tag}</p>
  ))

  const [firstName, lastName] = host.name.split(" ")

  return (
    <main className="announcement">
      <Carousel pictures={pictures} title={title} />

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
