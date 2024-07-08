/**
 * test scenario
 *
 * - asyncRegisterUser thunk
 *  - should dispatch action call api correctly when asyncRegisterUser thunk function is called
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import api from '../../utils/api'
import { asyncRegisterUser } from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const fakeUserRequest = {
  name: 'user-1',
  email: 'user-1@example.com',
  password: 'user1234'
}

const fakeUserResponse = {
  user: {
    id: 'user-1',
    name: 'username-1',
    email: 'user-1@example.com',
    avatar: 'https://generated-image-url.jpg'
  }
}

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncRegister thunk', () => {
  beforeEach(() => {
    api._register = api.register
  })

  afterEach(() => {
    api.register = api._register

    delete api.register
  })

  it('should dispatch action and call register api correctly along with required parameters when asyncRegisterUser thunk function is called', async () => {
    // arrange
    // stub implementation
    api.register = () => Promise.resolve(fakeUserResponse)
    // mock dispatch
    const dispatch = vi.fn()

    // action
    await asyncRegisterUser(fakeUserRequest)(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.register = () => Promise.reject(fakeErrorResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock alert
    window.alert = vi.fn()

    // action
    await asyncRegisterUser(fakeUserRequest)(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
