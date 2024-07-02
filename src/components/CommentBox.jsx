import React from 'react'

const s = () => {
  return (
    <div className='flex flex-col gap-4'>
      <textarea
        name=''
        id=''
        className='w-full h-[100px] px-4 py-2 text-sm border border-gray-400'
        placeholder='Add a comment'
      ></textarea>
      <div className='flex gap-2 justify-end'>
        <button className='bg-white border-[1px] border-black text-sm px-4 py-1 rounded-sm'>
          Cancel
        </button>
        <button className='text-white bg-black border-[1px] border-black text-sm px-4 py-1 rounded-sm'>
          Comment
        </button>
      </div>
    </div>
  )
}

export default s
