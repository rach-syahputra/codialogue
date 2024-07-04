import React from 'react'
import ThreadItem, { threadItemShape } from './ThreadItem'
import PropTypes from 'prop-types'

const ThreadsList = ({ threads, activeCategory }) => {
  return (
    <div className='flex flex-col ml-[200px] px-8'>
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
  activeCategory: PropTypes.string.isRequired
}

export default ThreadsList
