import React from 'react'
import PropTypes from 'prop-types'
import arrowUpImg from '../assets/arrow-up.png'
import arrowDownImg from '../assets/arrow-down.png'
import arrowUpToggledImg from '../assets/arrow-up-toggled.png'
import arrowDownToggledImg from '../assets/arrow-down-toggled.png'

const Arrow = ({ type, toggled }) => {
  const image = type === 'up' ? toggled ? arrowUpToggledImg : arrowUpImg : type === 'down' ? toggled ? arrowDownToggledImg : arrowDownImg : ''

  return (
    <img
      src={image}
      alt=''
      className='w-4 h-4'
    />
  )
}

export default Arrow

Arrow.propTypes = {
  type: PropTypes.oneOf(['up', 'down']),
  toggled: PropTypes.bool
}
