import React from 'react'
import arrowUp from '../assets/arrow-up.png'
import arrowDown from '../assets/arrow-down.png'
import firstLetter from '../utils/firstLetter'
import { ownerShape } from './ThreadItem'
import PropTypes from 'prop-types'
import timeSince from '../utils/timeSince'

const CommentItem = ({ id, content, createdAt, owner, upVotesBy, downVotesBy }) => {
  // const onPostComment = () => {

  // }

  return (
    <div className='flex flex-col gap-2 text-sm'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='flex items-center justify-center w-5 h-5 bg-black text-[12px] leading-[24px] text-white rounded-full cursor-pointer'>
            {firstLetter(owner.name)}
          </div>
          <span className='font-semibold'>{owner.name}</span>
        </div>
        <span className='text-xs text-gray-500'>{timeSince(createdAt)}</span>
      </div>

      <p>{content}</p>

      <div className='flex gap-4'>
        <div className='flex gap-1 items-center'>
          <img src={arrowUp} alt='' className='w-4 h-4' />
          <span className='text-sm'>{upVotesBy.length}</span>
        </div>
        <div className='flex gap-1 items-center'>
          <img src={arrowDown} alt='' className='w-4 h-4' />
          <span className='text-sm'>{downVotesBy.length}</span>
        </div>
      </div>
    </div>
  )
}

export const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
}

CommentItem.propTypes = {
  ...commentShape,
}

export default CommentItem
