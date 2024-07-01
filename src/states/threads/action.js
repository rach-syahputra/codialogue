import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_VOTE_UP_THREAD: 'TOGGLE_VOTE_UP_THREAD',
  TOGGLE_VOTE_DOWN_THREAD: 'TOGGLE_VOTE_UP_THREAD'
}

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads
    }
  }
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread
    }
  }
}

function toggleVoteUpThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_VOTE_UP_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function toggleVoteDownThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_VOTE_DOWN_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading())

    try {
      const thread = await api.createThread({ title, body, category })
      dispatch(addThreadActionCreator(thread))
    } catch (error) {
      alert(error.message)
    }

    dispatch(hideLoading())
  }
}

function asyncToggleUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleVoteUpThreadActionCreator({ threadId, userId: authUser.id }))

    dispatch(showLoading())

    try {
      await api.upVoteThread(threadId)
    } catch (error) {
      alert(error.message)
      dispatch(toggleVoteUpThreadActionCreator({ threadId, userId: authUser.id }))
    }

    dispatch(hideLoading())
  }
}

function asyncToggleDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleVoteDownThreadActionCreator({ threadId, userId: authUser.id }))

    dispatch(showLoading())

    try {
      await api.downVoteThread(threadId)
    } catch (error) {
      alert(error.message)
      dispatch(toggleVoteDownThreadActionCreator({ threadId, userId: authUser.id }))
    }

    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleVoteUpThreadActionCreator,
  toggleVoteDownThreadActionCreator,
  asyncAddThread,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread
}