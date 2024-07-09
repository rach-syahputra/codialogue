import React from 'react'
import '../styles/button.css'
import PropTypes from 'prop-types'

const Button = ({ primary, size, label, onClick }) => {
  const mode = primary ? 'button--primary' : 'button--secondary'
  return (
    <button
      className={['button', `button--${size}`, mode].join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired
}

Button.defaultProps = {
  primary: true,
  size: 'large',
  label: 'Button'
}
