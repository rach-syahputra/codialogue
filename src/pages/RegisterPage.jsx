import React from 'react'
import Loading from '../components/Loading'
import RegisterForm from '../components/RegisterForm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncRegisterUser } from '../states/users/action'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onRegister = ({ name, email, password }) => {
    if (password.length < 6) {
      window.window.alert('password must be at least 6 characters')
    } else {
      dispatch(asyncRegisterUser({ name, email, password }))
      navigate('/login')
    }
  }
  return (
    <div className='flex flex-col gap-6 items-center justify-center w-[1024px] m-auto'>
      <Loading />
      <h1 className='text-2xl font-bold'>Sign Up to CoDialogue</h1>
      <RegisterForm register={onRegister} />
    </div>
  )
}

export default RegisterPage
