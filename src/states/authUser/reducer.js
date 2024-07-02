import { ActionType } from './action'

const authUserFromStorage = JSON.parse(localStorage.getItem('auth-user'))

function authUserReducer(authUser = authUserFromStorage, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser
    case ActionType.UNSET_AUTH_USER:
      return null
    default:
      return authUser
  }
}

export default authUserReducer
