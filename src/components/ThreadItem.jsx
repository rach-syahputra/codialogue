import React from 'react'
import PropTypes from 'prop-types'
import arrowUp from '../assets/arrow-up.png'
import arrowDown from '../assets/arrow-down.png'
import chat from '../assets/chat.png'

const ThreadItem = ({ id, title, body, category }) => {
  return (
    <div className='flex flex-col py-6 gap-1 border-b-[1px] border-gray-300'>
      <div className='flex items-center gap-2 text-sm'>
        <div className='bg-black w-5 h-5 rounded-full'></div>
        <span>username</span>
        <span>•</span>
        <span className='text-gray-400'>12 days ago</span>
        <div className='bg-gray-300 px-2 py-1 rounded-md'>Category</div>
      </div>

      <h1 className='font-bold text-xl'>This is the title of a thread</h1>

      <p>
        thread body goes here, it can be long text thread body goes here, it can be long textthread
        body goes here, it can be long textthread body goes here, it can be long textthread body
        goes here, it can be long textthread body goes here, it can be long text
      </p>

      <div className='flex gap-4'>
        <div className='flex gap-1 items-center'>
          <img src={arrowUp} alt='' className='w-4 h-4' />
          <span className='text-sm'>102</span>
        </div>
        <div className='flex gap-1 items-center'>
          <img src={arrowDown} alt='' className='w-4 h-4' />
          <span className='text-sm'>2</span>
        </div>
        <div className='flex gap-1 items-center'>
          <img src={chat} alt='' className='w-5 h-5' />
          <span className='text-sm'>5</span>
        </div>
      </div>
    </div>
  )
}

export const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number,
}

ThreadItem.propTypes = {
  ...threadItemShape,
}

export default ThreadItem
