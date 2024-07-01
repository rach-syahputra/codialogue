import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center w-[1024px] m-auto'>
      <h1 className='text-2xl font-bold'>Login to CoDialogue</h1>
      <form action='' className='flex flex-col gap-4 w-[300px]'>
        <div className='flex flex-col gap-2 text-sm'>
          <input type='text' className='border border-black rounded-sm p-2' placeholder='Email' />
          <input
            type='text'
            className='border border-black rounded-sm p-2'
            placeholder='Password'
          />
        </div>
        <button className='px-4 py-2 text-white text-sm bg-black rounded-sm'>Login</button>
        <p className='text-sm'>
          Don&apos;t have an account yet? <span className='text-blue-600'>Sign Up</span>
        </p>
      </form>
    </div>
  )
}

export default LoginPage
