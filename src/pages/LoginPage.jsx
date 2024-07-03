import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from '../states/authUser/action'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
    navigate('/')
  }

  return (
    <div className='flex flex-col gap-6 items-center justify-center w-[1024px] m-auto'>
      <Loading />
      <h1 className='text-2xl font-bold'>Login to CoDialogue</h1>
      <LoginForm login={onLogin} />
    </div>
  )
}

export default LoginPage
