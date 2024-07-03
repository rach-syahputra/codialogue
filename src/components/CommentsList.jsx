import React from 'react'

import PropTypes from 'prop-types'
import CommentItem, { commentShape } from './CommentItem'

const CommentsList = ({ threadId, comments }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-lg'>{`Comments(${comments.length})`}</h1>
      {comments.map((comment) => (
        <CommentItem threadId={threadId} {...comment} key={comment.id} />
      ))}
    </div>
  )
}

CommentsList.propTypes = {
  threadId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
}

export default CommentsList
