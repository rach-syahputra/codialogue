/**
* test scenario for threadsReducer
*
* - threadsReducer function
*   - should return the initial state when given by unknown action
*   - should return the threads when given by RECEIVE_THREADS action
*   - should return the threads along with the new thread when given by ADD_THREAD action
*   - should return the threads along with the toggled up vote thread when given by TOGGLE_UP_VOTE_THREAD action
*   - should return the threads along with the toggled down vote thread when given by TOGGLE_DOWN_VOTE_THREAD action
*/

import { describe, it, expect } from 'vitest'
import threadsReducer from './reducer'

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = []
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = []
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'title-1',
            body: 'body-1',
            category: 'category-1',
            cretedAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'user-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 5
          },
          {
            id: 'thread-2',
            title: 'title-2',
            body: 'body-2',
            category: 'category-2',
            cretedAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'user-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 5
          }
        ]
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.threads)
  })

  it('should return the threads along with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'title-1',
        body: 'body-1',
        category: 'category-1',
        cretedAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'user-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 5
      }
    ]

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'title-2',
          body: 'body-2',
          category: 'category-2',
          cretedAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'user-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 5
        }
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState])
  })

  it('should return the threads along with the toggled up vote thread when given by TOGGLE_UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'title-1',
        body: 'body-1',
        category: 'category-1',
        cretedAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'user-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 5
      }
    ]

    const action = {
      type: 'TOGGLE_UP_VOTE_THREAD_ON_THREADS',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1'
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId]
      }
    ])
  })

  it('should return the threads along with the toggled up vote thread when given by TOGGLE_DOWN_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'title-1',
        body: 'body-1',
        category: 'category-1',
        cretedAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'user-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 5
      }
    ]

    const action = {
      type: 'TOGGLE_DOWN_VOTE_THREAD_ON_THREADS',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1'
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId]
      }
    ])
  })
})
