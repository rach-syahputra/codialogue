import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'

const HomePage = () => {
  const threads = useSelector((state) => state.threads)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [])

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {threads?.map((thread) => (
          <div key={thread.id}>{thread.id}</div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
