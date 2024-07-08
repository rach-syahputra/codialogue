/**
* test scenario for authUserReducer
*
* - authUserReducer function
*   - should return the initial state when given by unknown action
*   - should return the authUser when given by SET_AUTH_USER action
*   - should return the null when given by UNSET_AUTH_USER action
*/

import { describe, it, expect } from 'vitest'
import authUserReducer from './reducer'

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = authUserReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the authUser when given by SET_AUTH_USER action', () => {
    // arrange
    const initialState = null
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: {
          id: 'user-1',
          name: 'username-1',
          email: 'user-1@example.com',
          avatar: 'https://generated-image-url.jpg'
        }
      }
    }

    // action
    const nextState = authUserReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.authUser)
  })

  it('should return the null when given by UNSET_AUTH_USER action', () => {
    // arrange
    const initialState = {
      id: 'user-1',
      name: 'username-1',
      email: 'user-1@example.com',
      avatar: 'https://generated-image-url.jpg'
    }
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: null
      }
    }

    // action
    const nextState = authUserReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.authUser)
  })
})
