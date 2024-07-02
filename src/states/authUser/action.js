import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
}

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  }
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  }
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading())

    try {
      const token = await api.login({ email, password })
      api.putAccessToken(token)

      const authUser = await api.getOwnProfile()

      dispatch(setAuthUserActionCreator(authUser))
      localStorage.setItem('auth-user-name', authUser.name)
    } catch (error) {
      alert(error.message)
    }

    dispatch(hideLoading())
  }
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(showLoading())

    dispatch(unsetAuthUserActionCreator())
    api.putAccessToken('')
    localStorage.setItem('auth-user-name', '')

    dispatch(hideLoading())
  }
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
}
