import { Route, Routes } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ThreadDetailPage from './pages/ThreadDetailPage'
import CreateThreadPage from './pages/CreateThreadPage'
import { useSelector } from 'react-redux'

function App() {
  const { isPreload = false } = useSelector((state) => state)

  if (isPreload) {
    null
  }

  return (
    <>
      <div className='app-container'>
        <header>{/* navigation */}</header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/threads/new-thread' element={<CreateThreadPage />} />
            <Route path='/threads/:id' element={<ThreadDetailPage />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
