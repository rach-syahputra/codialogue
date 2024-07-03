import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useDispatch } from 'react-redux'
import { asyncAddThread } from '../states/threads/action'
import { useNavigate } from 'react-router-dom'
import CreateThreadInput from '../components/CreateThreadInput'
import Loading from '../components/Loading'

const CreateThreadPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onPostThread = async ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }))
    navigate('/')
  }

  return (
    <div className='mt-[70px] pb-4'>
      <Navbar />
      <Loading />
      <div className='w-[1024px] m-auto'>
        <Sidebar />
        <div className='flex flex-col ml-[200px] px-8 py-4 gap-4'>
          <h1 className='font-bold text-lg'>Create a thread</h1>
          <CreateThreadInput onPostThread={onPostThread} />
        </div>
      </div>
    </div>
  )
}

export default CreateThreadPage
