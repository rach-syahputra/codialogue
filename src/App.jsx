import { Route, Routes } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <>
      <div className='app-container'>
        <header>{/* navigation */}</header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
