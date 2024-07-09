import React, { useEffect, useState } from 'react'
import { ownerShape } from './ThreadItem'
import PropTypes from 'prop-types'
import timeSince from '../utils/timeSince'
import {
  asyncToggleNeutralVoteComment,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment
} from '../states/threadDetail/action'
import { useDispatch, useSelector } from 'react-redux'
import Arrow from './Arrow'

const CommentItem = ({ threadId, id, content, createdAt, owner, upVotesBy, downVotesBy }) => {
  const [toggleUpVote, setToggleUpVote] = useState(false)
  const [toggleDownVote, setToggleDownVote] = useState(false)
  const authUser = useSelector((state) => state.authUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const upVoteUserExist = upVotesBy.find((user) => user === authUser?.id)
    const downVoteUserExist = downVotesBy.find((user) => user === authUser?.id)

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
    } else if (toggleDownVote) {
      dispatch(asyncToggleNeutralVoteComment({ threadId, commentId }))
      dispatch(asyncToggleUpVoteComment({ threadId, commentId }))
    } else {
      dispatch(asyncToggleUpVoteComment({ threadId, commentId }))
    }
  }

  const onDownVote = (threadId, commentId) => {
    if (toggleDownVote) {
      dispatch(asyncToggleNeutralVoteComment({ threadId, commentId }))
    } else if (toggleUpVote) {
      dispatch(asyncToggleNeutralVoteComment({ threadId, commentId }))
      dispatch(asyncToggleDownVoteComment({ threadId, commentId }))
    } else {
      dispatch(asyncToggleDownVoteComment({ threadId, commentId }))
    }
  }

  return (
    <div className='flex flex-col gap-2 text-sm'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <img src={owner.avatar} alt='' className='w-7 h-7 rounded-full' />
          <span className='font-semibold'>{owner.name}</span>
        </div>
        <span className='text-xs text-gray-500'>{timeSince(createdAt)}</span>
      </div>

      <p>{content}</p>

      <div className='flex gap-4'>
        <div className='flex gap-1 items-center'>
          <button onClick={() => onUpVote(threadId, id)}>
            {toggleUpVote
              ? (
                <Arrow type='up' toggled={true} />
                )
              : (
                <Arrow type='up' toggled={false} />
                )}
          </button>
          <span className='text-sm'>{upVotesBy.length}</span>
        </div>
        <div className='flex gap-1 items-center'>
          <button onClick={() => onDownVote(threadId, id)}>
            {toggleDownVote
              ? (
                <Arrow type='down' toggled={true} />
                )
              : (
                <Arrow type='down' toggled={false} />
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
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired
}

CommentItem.propTypes = {
  ...commentShape
}

export default CommentItem
