import React, { useEffect, useState } from 'react'
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
  const threadDetail = useSelector((state) => state.threadDetail)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [])

  useEffect(() => {}, [threadDetail])

  return (
    <div className='mt-[70px] pb-4'>
      <Navbar />
      <div className='w-[1024px] m-auto'>
        <Sidebar />
        {threadDetail && (
          <div className='flex flex-col ml-[200px] px-8'>
            <ThreadItem {...threadDetail} key={threadDetail.id} />
            <div className='flex flex-col gap-4'>
              <CommentBox />
              <CommentsList comments={threadDetail.comments} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ThreadDetailPage
