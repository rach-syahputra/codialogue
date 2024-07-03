import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

const RegisterForm = ({ register }) => {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  return (
    <form
      action=''
      className='flex flex-col gap-4 w-[300px]'
      onSubmit={() => register({ name, email, password })}
    >
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

      <button className='px-4 py-2 text-white text-sm bg-black rounded-sm'>Register</button>
    </form>
  )
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
}

export default RegisterForm
