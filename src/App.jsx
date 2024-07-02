import { Route, Routes } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ThreadDetailPage from './pages/ThreadDetailPage'

function App() {
  return (
    <>
      <div className='app-container'>
        <header>{/* navigation */}</header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/threads/:id' element={<ThreadDetailPage />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
