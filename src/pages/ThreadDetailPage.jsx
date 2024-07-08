import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { asyncAddComment, asyncReceiveThreadDetail } from '../states/threadDetail/action'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import CommentBox from '../components/CommentBox'
import CommentsList from '../components/CommentsList'
import ThreadDetailItem from '../components/ThreadDetailItem'
import Loading from '../components/Loading'

const ThreadDetailPage = () => {
  const { id } = useParams()
  const threadDetail = useSelector((state) => state.threadDetail)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [])

  const onPostComment = ({ threadId, content }) => {
    dispatch(asyncAddComment({ threadId, content }))
  }

  return (
    <div className='mt-[70px] pb-4'>
      <Navbar />
      <Loading />
      <div className='w-[1024px] m-auto'>
        <Sidebar />
        {threadDetail && (
          <div className='flex flex-col ml-[200px] px-8'>
            <ThreadDetailItem {...threadDetail} key={threadDetail.id} />
            <div className='flex flex-col gap-4'>
              <CommentBox threadId={id} postComment={onPostComment} />
              <CommentsList threadId={id} comments={threadDetail.comments} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ThreadDetailPage
