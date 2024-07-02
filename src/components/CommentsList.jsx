import React from 'react'
import arrowUp from '../assets/arrow-up.png'
import arrowDown from '../assets/arrow-down.png'

const CommentsList = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-lg'>Comments(2)</h1>
      <div className='flex flex-col gap-2 text-sm'>
        <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-black rounded-full'></div>
            <span className='font-bold'>User Name</span>
          </div>
          <span className='text-xs text-gray-500'>32 minutes ago</span>
        </div>

        <p>this is a body of the thread</p>

        <div className='flex gap-4'>
          <div className='flex gap-1 items-center'>
            <img src={arrowUp} alt='' className='w-4 h-4' />
            <span className='text-sm'>19</span>
          </div>
          <div className='flex gap-1 items-center'>
            <img src={arrowDown} alt='' className='w-4 h-4' />
            <span className='text-sm'>2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsList
