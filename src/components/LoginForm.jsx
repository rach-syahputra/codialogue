import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'
import { Link } from 'react-router-dom'
import Button from './Button'

const LoginForm = ({ login }) => {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  return (
    <div className='flex flex-col gap-4 w-[300px]'>
      <div className='flex flex-col gap-2 text-sm'>
        <input
          type='text'
          className='border border-black rounded-sm p-2'
          value={email}
          onChange={onEmailChange}
          placeholder='Email'
        />
        <input
          type='password'
          className='border border-black rounded-sm p-2'
          value={password}
          onChange={onPasswordChange}
          placeholder='Password'
        />
      </div>

      <Button label='Login' onClick={() => login({ email, password })}/>

      <p className='text-sm'>
        Don&apos;t have an account yet?{' '}
        <span className='text-blue-600'>
          <Link to='/register'>Sign Up</Link>
        </span>
      </p>
    </div>
  )
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginForm
