import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dopdown.scss'

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className="dropdown__content">
          {typeof content === 'string' ? (
            <p>{content}</p>
          ) : (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

export default Dropdown;
