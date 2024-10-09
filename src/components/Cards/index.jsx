import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './Cards.scss'

const Card = ({ id, cover, title, pictures, description, host, equipments, tags, location, rating }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/announcement/${id}`, {
      state: { id, cover, title, pictures, description, host, equipments, tags, location, rating },
    })
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={cover} alt={title} className="card__image" />
      <div className="card__details">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <p className="card__location">Location: {location}</p>
        <p className="card__rating">Rating: {rating}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  host: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  equipments: PropTypes.arrayOf(PropTypes.string),
}

const Cards = ({ data }) => (
  <div className="cards">
    {data.map(card => (
      <Card key={card.id} {...card} />
    ))}
  </div>
)

Cards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string.isRequired,
      host: PropTypes.shape({
        name: PropTypes.string,
        picture: PropTypes.string,
      }).isRequired,
      location: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      equipments: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
}

export default Cards