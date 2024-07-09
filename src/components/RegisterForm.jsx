import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'
import Button from './Button'

const RegisterForm = ({ register }) => {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  return (
    <div className='flex flex-col gap-4 w-[300px]'>
      <div className='flex flex-col gap-2 text-sm'>
        <input
          type='text'
          className='border border-black rounded-sm p-2'
          value={name}
          onChange={onNameChange}
          placeholder='Name'
        />
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

      <Button label='Sign Up' onClick={() => register({ name, email, password })} />
    </div>
  )
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired
}

export default RegisterForm
