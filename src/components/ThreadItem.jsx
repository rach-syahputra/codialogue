import React, { useState } from 'react'
import PropTypes from 'prop-types'
import arrowUp from '../assets/arrow-up.png'
import arrowDown from '../assets/arrow-down.png'
import arrowUpToggled from '../assets/arrow-up-toggled.png'
import arrowDownToggled from '../assets/arrow-down-toggled.png'
import chat from '../assets/chat.png'
import timeSince from '../utils/timeSince'
import truncateBody from '../utils/truncateBody'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  asyncToggleDownVoteThread,
  asyncToggleNeutralVoteThread,
  asyncToggleUpVoteThread,
} from '../states/threads/action'

const ThreadItem = ({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  totalComments,
}) => {
  const [toggleUpVote, setToggleUpVote] = useState(false)
  const [toggleDownVote, setToggleDownVote] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onNavigate = (id) => {
    navigate(`/threads/${id}`)
  }

  const onUpVote = (id) => {
    if (toggleUpVote) {
      dispatch(asyncToggleNeutralVoteThread(id))
      setToggleUpVote(false)
    } else if (toggleDownVote) {
      dispatch(asyncToggleNeutralVoteThread(id))
      dispatch(asyncToggleUpVoteThread(id))
      setToggleUpVote(true)
      setToggleDownVote(false)
    } else {
      dispatch(asyncToggleUpVoteThread(id))
      setToggleUpVote(true)
      setToggleDownVote(false)
    }
  }

  const onDownVote = (id) => {
    if (toggleDownVote) {
      dispatch(asyncToggleNeutralVoteThread(id))
      setToggleDownVote(false)
    } else if (toggleUpVote) {
      dispatch(asyncToggleNeutralVoteThread(id))
      dispatch(asyncToggleDownVoteThread(id))
      setToggleDownVote(true)
      setToggleUpVote(false)
    } else {
      dispatch(asyncToggleDownVoteThread(id))
      setToggleDownVote(true)
      setToggleUpVote(false)
    }
  }

  return (
    <div className='flex flex-col py-6 gap-1 border-b-[1px] border-gray-300'>
      <div className='flex items-center gap-2 text-sm'>
        <img src={owner?.avatar} alt='' className='w-6 h-6 rounded-full' />
        <span className='font-medium'>{owner?.name}</span>
        <span>•</span>
        <span className='text-gray-400'>{timeSince(createdAt)}</span>
        <div className='bg-gray-300 px-2 py-1 rounded-md text-xs'>{category}</div>
      </div>

      <h1 className='font-bold text-xl cursor-pointer' onClick={() => onNavigate(id)}>
        {title}
      </h1>

      <p>{truncateBody(body, 200)}</p>

      <div className='flex gap-4'>
        <div className='flex gap-1 items-center'>
          <button onClick={() => onUpVote(id)}>
            {toggleUpVote ? (
              <img src={arrowUpToggled} alt='' className='w-4 h-4' />
            ) : (
              <img src={arrowUp} alt='' className='w-4 h-4' />
            )}
          </button>
          <span className='text-sm'>{upVotesBy?.length}</span>
        </div>
        <div className='flex gap-1 items-center'>
          <button onClick={() => onDownVote(id)}>
            {toggleDownVote ? (
              <img src={arrowDownToggled} alt='' className='w-4 h-4' />
            ) : (
              <img src={arrowDown} alt='' className='w-4 h-4' />
            )}
          </button>
          <span className='text-sm'>{downVotesBy?.length}</span>
        </div>
        <div className='flex gap-1 items-center cursor-pointer' onClick={() => onNavigate(id)}>
          <img src={chat} alt='' className='w-5 h-5' />
          <span className='text-sm'>{totalComments}</span>
        </div>
      </div>
    </div>
  )
}

export const ownerShape = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
}

ThreadItem.propTypes = {
  ...threadItemShape,
  totalComments: PropTypes.number,
}

export default ThreadItem
