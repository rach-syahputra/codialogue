import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Categories = ({ activeCategory, handleActiveCategoryChange }) => {
  const categories = useSelector((state) => state.categories)

  return (
    <div className='inline-block md:hidden'>
      <ul className='flex p-2'>
        {categories.map((category) => (
          <li
            className={`w-fit cursor-pointer px-2 py-1 rounded-sm select-none ${
              activeCategory === category && 'bg-black text-white'
            }`}
            key={category}
            onClick={() => handleActiveCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

Categories.propTypes = {
  activeCategory: PropTypes.string,
  handleActiveCategoryChange: PropTypes.func
}

export default Categories
