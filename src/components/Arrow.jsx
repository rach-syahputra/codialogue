import React from 'react'
import PropTypes from 'prop-types'
import '../styles/arrow.css'
import arrowUpImg from '../assets/arrow-up.png'
import arrowDownImg from '../assets/arrow-down.png'
import arrowUpToggledImg from '../assets/arrow-up-toggled.png'
import arrowDownToggledImg from '../assets/arrow-down-toggled.png'

const Arrow = ({ type, toggled, value, onClick }) => {
  const image = type === 'up' ? toggled ? arrowUpToggledImg : arrowUpImg : type === 'down' ? toggled ? arrowDownToggledImg : arrowDownImg : ''

  return (
    <div className='arrow'>
      <button onClick={onClick}>
        <img
          src={image}
        />
      </button>
      <span>{value}</span>
    </div>

  )
}

export default Arrow

Arrow.propTypes = {
  type: PropTypes.oneOf(['up', 'down']),
  toggled: PropTypes.bool,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

Arrow.defaultProps = {
  toggled: false,
  value: 0
}
