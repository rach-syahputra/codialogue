import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import CommentItem, { commentShape } from './CommentItem'

const CommentsList = ({ comments }) => {
  // useEffect(() => {
  //   console.log(comments)
  // }, [comments])
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-lg'>{`Comments(${comments.length})`}</h1>
      {comments && comments.map((comment) => <CommentItem {...comment} key={comment.id} />)}
    </div>
  )
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
}

export default CommentsList
