import React, { useEffect, useState } from 'react'
import arrowUp from '../assets/arrow-up.png'
import arrowDown from '../assets/arrow-down.png'
import arrowUpToggled from '../assets/arrow-up-toggled.png'
import arrowDownToggled from '../assets/arrow-down-toggled.png'
import firstLetter from '../utils/firstLetter'
import { ownerShape } from './ThreadItem'
import PropTypes from 'prop-types'
import timeSince from '../utils/timeSince'
import {
  asyncToggleNeutralVoteComment,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
} from '../states/threadDetail/action'
import { useDispatch, useSelector } from 'react-redux'

const CommentItem = ({ threadId, id, content, createdAt, owner, upVotesBy, downVotesBy }) => {
  const [toggleUpVote, setToggleUpVote] = useState(false)
  const [toggleDownVote, setToggleDownVote] = useState(false)
  const authUser = useSelector((state) => state.authUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const upVoteUserExist = upVotesBy.find((user) => user === authUser.id)
    const downVoteUserExist = downVotesBy.find((user) => user === authUser.id)

    if (upVoteUserExist) {
      setToggleUpVote(true)
    } else {
      setToggleUpVote(false)
    }
    if (downVoteUserExist) {
      setToggleDownVote(true)
    } else {
      setToggleDownVote(false)
    }
  }, [upVotesBy, downVotesBy])

  const onUpVote = (threadId, commentId) => {
    if (toggleUpVote) {
      dispatch(asyncToggleNeutralVoteComment({ threadId, commentId }))
      setToggleUpVote(false)
    } else if (toggleDownVote) {
      dispatch(asyncToggleNeutralVoteComment({ threadId, commentId }))
      dispatch(asyncToggleUpVoteComment({ threadId, commentId }))
      setToggleUpVote(true)
      setToggleDownVote(false)
    } else {
      dispatch(asyncToggleUpVoteComment({ threadId, commentId }))
      setToggleUpVote(true)
      setToggleDownVote(false)
    }
  }

  const onDownVote = (threadId, commentId) => {
    if (toggleDownVote) {
      dispatch(asyncToggleNeutralVoteComment({ threadId, commentId }))
      setToggleDownVote(false)
    } else if (toggleUpVote) {
      dispatch(asyncToggleNeutralVoteComment({ threadId, commentId }))
      dispatch(asyncToggleDownVoteComment({ threadId, commentId }))
      setToggleDownVote(true)
      setToggleUpVote(false)
    } else {
      dispatch(asyncToggleDownVoteComment({ threadId, commentId }))
      setToggleDownVote(true)
      setToggleUpVote(false)
    }
  }

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
          <button onClick={() => onUpVote(threadId, id)}>
            {toggleUpVote ? (
              <img src={arrowUpToggled} alt='' className='w-4 h-4' />
            ) : (
              <img src={arrowUp} alt='' className='w-4 h-4' />
            )}
          </button>
          <span className='text-sm'>{upVotesBy.length}</span>
        </div>
        <div className='flex gap-1 items-center'>
          <button onClick={() => onDownVote(threadId, id)}>
            {toggleDownVote ? (
              <img src={arrowDownToggled} alt='' className='w-4 h-4' />
            ) : (
              <img src={arrowDown} alt='' className='w-4 h-4' />
            )}
          </button>
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