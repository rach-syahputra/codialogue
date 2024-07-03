import { Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ThreadDetailPage from './pages/ThreadDetailPage'
import CreateThreadPage from './pages/CreateThreadPage'
import { useDispatch, useSelector } from 'react-redux'
import LeaderboardsPage from './pages/LeaderboardsPage'
import { asyncPreloadProcess } from './states/isPreload/action'

function App() {
  const { isPreload = false } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])

  if (isPreload) {
    return null
  }

  return (
    <>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/threads/new-thread' element={<CreateThreadPage />} />
          <Route path='/threads/:id' element={<ThreadDetailPage />} />
          <Route path='/leaderboards' element={<LeaderboardsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
