/**
* test scenario for usersReducer
*
* - usersReducer function
*   - should return the initial state when given by unknown action
*   - should return the users when given by RECEIVE_USERS action
*/

import { describe, it, expect } from 'vitest'
import usersReducer from './reducer'

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = []
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = usersReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the talks when given by RECEIVE_TALKS action', () => {
    // arrange
    const initialState = []
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 'user-1',
            name: 'username-1',
            email: 'user-1@example.com',
            avatar: 'https://generated-image-url.jpg'
          },
          {
            id: 'user-2',
            name: 'username-2',
            email: 'user-2@example.com',
            avatar: 'https://generated-image-url.jpg'
          }
        ]
      }
    }

    // action
    const nextState = usersReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.users)
  })
})
