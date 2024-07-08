import React from 'react'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { asyncAddComment } from '../states/threadDetail/action'
import PropTypes from 'prop-types'

const CommentBox = ({ threadId }) => {
  const [content, onChangeContent, setContent] = useInput('')
  const dispatch = useDispatch()

  const onPostComment = () => {
    dispatch(asyncAddComment({ threadId, content }))
    setContent('')
  }

  return (
    <div className='flex flex-col gap-4'>
      <textarea
        value={content}
        onChange={onChangeContent}
        className='w-full h-[100px] px-4 py-2 text-sm border border-gray-400'
        placeholder='Add a comment'
      />
      <div className='flex gap-2 justify-end'>
        <button className='bg-white border-[1px] border-black text-sm px-4 py-1 rounded-sm' onClick={() => setContent('')}>
          Cancel
        </button>
        <button
          className='text-white bg-black border-[1px] border-black text-sm px-4 py-1 rounded-sm'
          onClick={onPostComment}
        >
          Comment
        </button>
      </div>
    </div>
  )
}

CommentBox.propTypes = {
  threadId: PropTypes.string.isRequired
}

export default CommentBox
