import React, { useEffect, useState } from 'react'
import timeSince from '../utils/timeSince'
import truncateBody from '../utils/truncateBody'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  asyncToggleNeutralVoteThread
} from '../states/threadDetail/action'
import { threadItemShape } from './ThreadItem'
import Arrow from './Arrow'

const ThreadDetailItem = ({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy
}) => {
  const [toggleUpVote, setToggleUpVote] = useState(false)
  const [toggleDownVote, setToggleDownVote] = useState(false)
  const authUser = useSelector((state) => state.authUser)
  const navigate = useNavigate()
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

  const onNavigate = (id) => {
    navigate(`/threads/${id}`)
  }

  const onUpVote = (id) => {
    if (toggleUpVote) {
      dispatch(asyncToggleNeutralVoteThread(id))
    } else if (toggleDownVote) {
      dispatch(asyncToggleNeutralVoteThread(id))
      dispatch(asyncToggleUpVoteThread(id))
    } else {
      dispatch(asyncToggleUpVoteThread(id))
    }
  }

  const onDownVote = (id) => {
    if (toggleDownVote) {
      dispatch(asyncToggleNeutralVoteThread(id))
    } else if (toggleUpVote) {
      dispatch(asyncToggleNeutralVoteThread(id))
      dispatch(asyncToggleDownVoteThread(id))
    } else {
      dispatch(asyncToggleDownVoteThread(id))
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
      <Arrow type='up' toggled={toggleUpVote} value={upVotesBy?.length} onClick={() => onUpVote(id)} />
      <Arrow type='down' toggled={toggleDownVote} value={downVotesBy?.length} onClick={() => onDownVote(id)} />
      </div>
    </div>
  )
}

ThreadDetailItem.propTypes = {
  ...threadItemShape
}

export default ThreadDetailItem
