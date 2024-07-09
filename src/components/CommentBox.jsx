import React from 'react'
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types'
import Button from './Button'

const CommentBox = ({ threadId, postComment }) => {
  const [content, onChangeContent, setContent] = useInput('')

  const handleButtonClick = () => {
    postComment({ threadId, content })
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
        <Button label='Cancel' primary={false} size='medium' onClick={() => setContent('')} />
        <Button label='Comment' size='medium' onClick={handleButtonClick} />
      </div>
    </div>
  )
}

CommentBox.propTypes = {
  threadId: PropTypes.string.isRequired,
  postComment: PropTypes.func.isRequired
}

export default CommentBox
