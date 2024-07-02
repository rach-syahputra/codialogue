import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { asyncAddThread } from '../states/threads/action'
import { useNavigate } from 'react-router-dom'

const CreateThreadPage = () => {
  const [title, onChangeTitle] = useInput('')
  const [body, onChangeBody] = useInput('')
  const [category, onChangeCategory] = useInput('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onPostThread = async () => {
    dispatch(asyncAddThread({ title, body, category }))
    navigate('/')
  }

  return (
    <div className='mt-[70px] pb-4'>
      <Navbar />
      <div className='w-[1024px] m-auto'>
        <Sidebar />
        <div className='flex flex-col ml-[200px] px-8 py-4 gap-4'>
          <h1 className='font-bold text-lg'>Create a thread</h1>
          <form action='' className='flex flex-col gap-4' onSubmit={onPostThread}>
            <div className='flex flex-col gap-4 '>
              <input
                className='border border-gray-500 px-3 py-1 rounded-sm'
                type='text'
                placeholder='title'
                onChange={onChangeTitle}
              />
              <textarea
                className='border border-gray-500 px-3 py-1 rounded-sm h-[80px]'
                name=''
                id=''
                placeholder='body'
                onChange={onChangeBody}
              ></textarea>
              <input
                className='border border-gray-500 px-3 py-1 rounded-sm'
                type='text'
                placeholder='category'
                onChange={onChangeCategory}
              />
            </div>
            <button className='bg-black text-white px-3 py-1 rounded-sm w-[120px]'>
              Post Thread
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateThreadPage
