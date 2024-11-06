import React from 'react'
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
      </div>
    </div>
  )
}

const Cards = ({ data }) => (
  <div className="cards">
    {data.map(card => (
      <Card key={card.id} {...card} />
    ))}
  </div>
)

export default Cards
