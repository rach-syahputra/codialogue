import React from 'react'
import ThreadItem, { threadItemShape } from './ThreadItem'
import PropTypes from 'prop-types'
import Categories from './Categories'

const ThreadsList = ({ threads, handleActiveCategoryChange, activeCategory }) => {
  return (
    <div className='flex flex-col md:ml-[200px] px-8'>
      <Categories handleActiveCategoryChange={handleActiveCategoryChange} activeCategory={activeCategory} />
      {threads.map((thread) =>
        activeCategory
          ? (
              activeCategory === thread.category && <ThreadItem {...thread} key={thread.id} />
            )
          : (
            <ThreadItem {...thread} key={thread.id} />
            )
      )}
    </div>
  )
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  handleActiveCategoryChange: PropTypes.func.isRequired,
  activeCategory: PropTypes.string.isRequired
}

export default ThreadsList
