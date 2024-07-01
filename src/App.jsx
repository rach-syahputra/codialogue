import { Route, Routes } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <div className='app-container'>
        <header>{/* navigation */}</header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
