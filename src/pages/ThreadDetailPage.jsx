import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { asyncReceiveThreadDetail } from '../states/threadDetail/action'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ThreadItem from '../components/ThreadItem'
import CommentBox from '../components/CommentBox'
import CommentsList from '../components/CommentsList'

const ThreadDetailPage = () => {
  const { id } = useParams()
  const thread = useSelector((state) => state.threadDetail)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [])

  return (
    <div className='mt-[70px]'>
      <Navbar />
      <div className='w-[1024px] m-auto'>
        <Sidebar />
        {thread && (
          <div className='flex flex-col ml-[200px] px-8'>
            <ThreadItem {...thread} key={thread.id} />
            <div className='flex flex-col gap-4'>
              <CommentBox />
              <CommentsList />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ThreadDetailPage
