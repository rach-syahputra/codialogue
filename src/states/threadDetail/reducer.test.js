/**
* test scenario for threadDetailReducer
*
* - threadsReducer function
*   - should return the initial state when given by unknown action
*   - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
*   - should return the thread detail along with the new comment when given by ADD_COMMENT action
*   - should return the thread detail along with the toggled up vote thread when given by TOGGLE_UP_VOTE_THREAD action
*   - should return the thread detail along with the toggled down vote thread when given by TOGGLE_DOWN_VOTE_THREAD action
*   - should return the thread detail along with the toggled neutral vote thread when given by TOGGLE_NEUTRAL_VOTE_THREAD action
*   - should return the thread detail along with the toggled up vote comment when given by TOGGLE_UP_VOTE_COMMENT action
*   - should return the thread detail along with the toggled down vote comment when given by TOGGLE_DOWN_VOTE_COMMENT action
*   - should return the thread detail along with the toggled neutral vote comment when given by TOGGLE_NEUTRAL_VOTE_COMMENT action
*/

import { describe, it, expect } from 'vitest'
import threadDetailReducer from './reducer'

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = null
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail:
          {
            id: 'thread-1',
            title: 'title-1',
            body: 'body-1',
            category: 'category-1',
            cretedAt: '2021-06-21T07:00:00.000Z',
            ownerId: {
              id: 'user-1',
              name: 'username-1',
              avatar: 'https://generated-image-url.jpg'
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: []
          }
      }
    }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.threadDetail)
  })

  it('should return the thread detail along with the new comment when given by ADD_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'title-1',
      body: 'body-1',
      category: 'category-1',
      cretedAt: '2021-06-21T07:00:00.000Z',
      ownerId: {
        id: 'user-1',
        name: 'username-1',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: []
    }

    const action = {
      type: 'ADD_COMMENT',
      payload: {
        comment:
          {
            id: 'comment-1',
            content: 'ini comment',
            createdAt: '2021-06-21T07:00:00.000Z',
            upVotesBy: [],
            downVotesBy: [],
            owner: {
              id: 'user-1',
              name: 'username-1',
              email: 'user-1@example.com'
            }
          }
      }
    }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments]
    })
  })

  it('should return the thread detail along with the toggled up vote thread when given by TOGGLE_UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'title-1',
      body: 'body-1',
      category: 'category-1',
      cretedAt: '2021-06-21T07:00:00.000Z',
      ownerId: {
        id: 'user-1',
        name: 'username-1',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: []
    }

    const action = {
      type: 'TOGGLE_UP_VOTE_THREAD_ON_THREAD_DETAIL',
      payload: {
        threadId: 'thread-1',
        userId: 'user-2'
      }
    }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId]
    })
  })

  it('should return the thread detail along with the toggled down vote thread when given by TOGGLE_DOWN_VOTE_THREAD action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'title-1',
      body: 'body-1',
      category: 'category-1',
      cretedAt: '2021-06-21T07:00:00.000Z',
      ownerId: {
        id: 'user-1',
        name: 'username-1',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: []
    }

    const action = {
      type: 'TOGGLE_DOWN_VOTE_THREAD_ON_THREAD_DETAIL',
      payload: {
        threadId: 'thread-1',
        userId: 'user-2'
      }
    }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual({
      ...initialState,
      downVotesBy: [action.payload.userId]
    })
  })

  it('should return the thread detail along with the toggled neutral vote thread when given by TOGGLE_NEUTRAL_VOTE_THREAD action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'title-1',
      body: 'body-1',
      category: 'category-1',
      cretedAt: '2021-06-21T07:00:00.000Z',
      ownerId: {
        id: 'user-1',
        name: 'username-1',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: ['user-2', 'user-3'],
      downVotesBy: [],
      comments: []
    }

    const action = {
      type: 'TOGGLE_NEUTRAL_VOTE_THREAD_ON_THREAD_DETAIL',
      payload: {
        threadId: 'thread-1',
        userId: 'user-2'
      }
    }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: ['user-3']
    })
  })

  it('should return the thread detail along with the toggled up vote comment when given by TOGGLE_UP_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'title-1',
      body: 'body-1',
      category: 'category-1',
      cretedAt: '2021-06-21T07:00:00.000Z',
      ownerId: {
        id: 'user-1',
        name: 'username-1',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'ini comment',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'user-2',
            name: 'username-2',
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    }

    const action = {
      type: 'TOGGLE_UP_VOTE_COMMENT',
      payload: {
        threadId: 'thread-1',
        commentId: 'comment-1',
        userId: 'user-2'
      }
    }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId]
        }
      ]
    })
  })

  it('should return the thread detail along with the toggled down vote comment when given by TOGGLE_DOWN_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'title-1',
      body: 'body-1',
      category: 'category-1',
      cretedAt: '2021-06-21T07:00:00.000Z',
      ownerId: {
        id: 'user-1',
        name: 'username-1',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'ini comment',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'user-2',
            name: 'username-2',
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    }

    const action = {
      type: 'TOGGLE_DOWN_VOTE_COMMENT',
      payload: {
        threadId: 'thread-1',
        commentId: 'comment-1',
        userId: 'user-2'
      }
    }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          downVotesBy: [action.payload.userId]
        }
      ]
    })
  })

  it('should return the thread detail along with the toggled neutral vote comment when given by TOGGLE_NEUTRAL_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'title-1',
      body: 'body-1',
      category: 'category-1',
      cretedAt: '2021-06-21T07:00:00.000Z',
      ownerId: {
        id: 'user-1',
        name: 'username-1',
        avatar: 'https://generated-image-url.jpg'
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'ini comment',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'user-2',
            name: 'username-2',
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: ['user-2']
        }
      ]
    }

    const action = {
      type: 'TOGGLE_NEUTRAL_VOTE_COMMENT',
      payload: {
        threadId: 'thread-1',
        commentId: 'comment-1',
        userId: 'user-2'
      }
    }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          downVotesBy: []
        }
      ]
    })
  })
})
