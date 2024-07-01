import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

const LoginForm = ({ login }) => {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  return (
    <form
      action=''
      className='flex flex-col gap-4 w-[300px]'
      onSubmit={() => login({ email, password })}
    >
      <div className='flex flex-col gap-2 text-sm'>
        <input
          type='text'
          className='border border-black rounded-sm p-2'
          value={email}
          onChange={onEmailChange}
          placeholder='Email'
        />
        <input
          type='text'
          className='border border-black rounded-sm p-2'
          value={password}
          onChange={onPasswordChange}
          placeholder='Password'
        />
      </div>

      <button className='px-4 py-2 text-white text-sm bg-black rounded-sm'>Login</button>

      <p className='text-sm'>
        Don&apos;t have an account yet? <span className='text-blue-600'>Sign Up</span>
      </p>
    </form>
  )
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginForm
