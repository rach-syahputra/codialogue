/**
 * test scenario
 *
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 * - asyncAddComment thunk
 *  - should dispatch action correctly when data fetching success
 *  - should call alert when user is unauthenticated
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import api from '../../utils/api'
import { asyncReceiveThreadDetail, asyncAddComment, receiveThreadDetailActionCreator, addCommentActionCreator } from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const fakeThreadDetailResponse = {
  id: 'thread-1',
  title: 'title-1',
  body: 'this is body',
  category: 'general',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: {
    id: 'user-1',
    name: 'username-1',
    avatar: 'https://generated-image-url.jpg'
  },
  upVotesBy: [],
  downVotesBy: [],
  comments: []
}

const fakeCreateCommentResponse = {
  id: 'comment-1',
  content: 'Ini adalah komentar pertama',
  createdAt: '2021-06-21T07:00:00.000Z',
  upVotesBy: [],
  downVotesBy: [],
  owner: {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com'
  }
}

const fakeUnauthenticatedMessage = 'you are unauthorized to perform this action, please LOG IN'

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncReceiveThreadDetail thunk', () => {
  beforeEach(() => {
    api._getThreadDetail = api.getThreadDetail
  })

  afterEach(() => {
    api.getThreadDetail = api._getThreadDetail

    delete api.getThreadDetail
  })

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse)
    // mock dispatch
    const dispatch = vi.fn()

    // action
    await asyncReceiveThreadDetail('thread-1')(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(receiveThreadDetailActionCreator(fakeThreadDetailResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.reject(fakeErrorResponse)
    // mock dispatch
    const dispatch = vi.fn()
    // mock alert
    window.alert = vi.fn()

    // action
    await asyncReceiveThreadDetail('thread-1')(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})

describe('asyncAddComment thunk', () => {
  beforeEach(() => {
    api._createComment = api.createComment
  })

  afterEach(() => {
    api.createComment = api._createComment

    delete api.createComment
  })

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.createComment = () => Promise.resolve(fakeCreateCommentResponse)
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
      content: 'Ini adalah komentar pertama'
    }

    // action
    await asyncAddComment(actionRequest)(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(addCommentActionCreator(fakeCreateCommentResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should call alert when user is unauthenticated', async () => {
    // arrange
    // stub implementation
    api.createComment = () => Promise.resolve(fakeCreateCommentResponse)
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
    await asyncAddComment(fakeCreateCommentResponse)(dispatch, getState)

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeUnauthenticatedMessage)
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.createComment = () => Promise.reject(fakeErrorResponse)
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
    await asyncAddComment({})(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
