import React from 'react'
import ThreadItem, { threadItemShape } from './ThreadItem'
import PropTypes from 'prop-types'

const ThreadsList = ({ threads }) => {
  return (
    <div className='flex flex-col m-auto w-[1024px]'>
      {threads.map((thread) => (
        <ThreadItem {...thread} key={thread.id} />
      ))}
    </div>
  )
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
}

export default ThreadsList
