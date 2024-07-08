/**
 * test scenario
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should call alert when user is unauthenticated
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 * - asyncToggleUpVoteThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should call alert when user is unauthenticated
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 *  - asyncToggleUpVoteThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should call alert when user is unauthenticated
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import api from '../../utils/api'
import { addThreadActionCreator, asyncAddThread, asyncToggleDownVoteThread, asyncToggleUpVoteThread, toggleDownVoteThreadActionCreator, toggleUpVoteThreadActionCreator } from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const fakeThreadRequest = {
  title: 'first thread',
  body: 'this is my first thread',
  category: 'general'
}

const fakeThreadResponse = {
  id: 'thread-1',
  title: 'first thread',
  body: 'this is my first thread',
  category: 'general',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'user-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0
}

const fakeUpVoteThreadResponse = {
  id: 'vote-1',
  userId: 'user-1',
  threadId: 'thread-1',
  voteType: 1
}

const fakeDownVoteThreadResponse = {
  id: 'vote-1',
  userId: 'user-1',
  threadId: 'thread-1',
  voteType: -1
}

const fakeUnauthenticatedMessage = 'you are unauthorized to perform this action, please LOG IN'

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    api._createThread = api.createThread
  })

  afterEach(() => {
    api.createThread = api._createThread

    delete api.createThread
  })

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.resolve(fakeThreadResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock getState
    const mockState = {
      authUser: {
        id: 'user-1'
      }
    }
    const getState = vi.fn().mockReturnValue(mockState)

    // action
    await asyncAddThread(fakeThreadRequest)(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakeThreadResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should call alert when user is unauthenticated', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.resolve(fakeThreadResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock getState
    const mockState = {
      authUser: null
    }
    const getState = vi.fn().mockReturnValue(mockState)
    // mock alert
    window.alert = vi.fn()

    // action
    await asyncAddThread(fakeThreadRequest)(dispatch, getState)

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeUnauthenticatedMessage)
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.reject(fakeErrorResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock getState
    const mockState = {
      authUser: {
        id: 'user-1'
      }
    }
    const getState = vi.fn().mockReturnValue(mockState)
    // mock alert
    window.alert = vi.fn()

    // action
    await asyncAddThread({})(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})

describe('asyncToggleUpVoteThread', async () => {
  beforeEach(() => {
    api._upVoteThread = api.upVoteThread
  })

  afterEach(() => {
    api.upVoteThread = api._upVoteThread

    delete api.upVoteThread
  })

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.upVoteThread = () => Promise.resolve(fakeUpVoteThreadResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock getState
    const mockState = {
      authUser: {
        id: 'user-1'
      }
    }
    const getState = vi.fn().mockReturnValue(mockState)

    const actionRequest = {
      threadId: 'thread-1',
      userId: mockState.authUser.id
    }

    // action
    await asyncToggleUpVoteThread(actionRequest.threadId)(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(toggleUpVoteThreadActionCreator(actionRequest))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should call alert when user is unauthenticated', async () => {
    // arrange
    // stub implementation
    api.upVoteThread = () => Promise.resolve(fakeUpVoteThreadResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock getState
    const mockState = {
      authUser: null
    }
    const getState = vi.fn().mockReturnValue(mockState)
    // mock alert
    window.alert = vi.fn()

    const actionRequest = {
      threadId: 'thread-1',
      userId: mockState.authUser?.id || null
    }

    // action
    await asyncToggleUpVoteThread(actionRequest.threadId)(dispatch, getState)

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeUnauthenticatedMessage)
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.upVoteThread = () => Promise.reject(fakeErrorResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock getState
    const mockState = {
      authUser: {
        id: 'user-1'
      }
    }
    const getState = vi.fn().mockReturnValue(mockState)
    // mock alert
    window.alert = vi.fn()

    const actionRequest = {
      threadId: 'thread-1',
      userId: mockState.authUser?.id || null
    }

    // action
    await asyncToggleUpVoteThread(actionRequest.threadId)(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})

describe('asyncToggleDownVoteThread', async () => {
  beforeEach(() => {
    api._downVoteThread = api.downVoteThread
  })

  afterEach(() => {
    api.downVoteThread = api._downVoteThread

    delete api.downVoteThread
  })

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.downVoteThread = () => Promise.resolve(fakeDownVoteThreadResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock getState
    const mockState = {
      authUser: {
        id: 'user-1'
      }
    }
    const getState = vi.fn().mockReturnValue(mockState)

    const actionRequest = {
      threadId: 'thread-1',
      userId: mockState.authUser.id
    }

    // action
    await asyncToggleDownVoteThread(actionRequest.threadId)(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(toggleDownVoteThreadActionCreator(actionRequest))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should call alert when user is unauthenticated', async () => {
    // arrange
    // stub implementation
    api.downVoteThread = () => Promise.resolve(fakeDownVoteThreadResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock getState
    const mockState = {
      authUser: null
    }
    const getState = vi.fn().mockReturnValue(mockState)
    // mock alert
    window.alert = vi.fn()

    const actionRequest = {
      threadId: 'thread-1',
      userId: mockState.authUser?.id || null
    }

    // action
    await asyncToggleDownVoteThread(actionRequest.threadId)(dispatch, getState)

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeUnauthenticatedMessage)
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.downVoteThread = () => Promise.reject(fakeErrorResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock getState
    const mockState = {
      authUser: {
        id: 'user-1'
      }
    }
    const getState = vi.fn().mockReturnValue(mockState)
    // mock alert
    window.alert = vi.fn()

    const actionRequest = {
      threadId: 'thread-1',
      userId: mockState.authUser?.id || null
    }

    // action
    await asyncToggleDownVoteThread(actionRequest.threadId)(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
