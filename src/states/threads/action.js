import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD_ON_THREADS',
  TOGGLE_DOWN_VOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD_ON_THREADS',
  TOGGLE_NEUTRAL_VOTE_THREAD: 'TOGGLE_NEUTRAL_VOTE_THREAD_ON_THREADS'
}

function receiveThreadsActionCreator (threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads
    }
  }
}

function addThreadActionCreator (thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread
    }
  }
}

function toggleUpVoteThreadActionCreator ({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function toggleDownVoteThreadActionCreator ({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function toggleNeutralVoteThreadActionCreator ({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function asyncAddThread ({ title, body, category }) {
  return async (dispatch, getState) => {
    const { authUser } = getState()

    if (!authUser) {
      window.alert('you are unauthorized to perform this action, please LOG IN')
      return
    }

    dispatch(showLoading())

    try {
      const thread = await api.createThread({ title, body, category })
      dispatch(addThreadActionCreator(thread))
    } catch (error) {
      window.alert(error.message)
    }

    dispatch(hideLoading())
  }
}

function asyncToggleUpVoteThread (threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState()

    if (!authUser) {
      window.alert('you are unauthorized to perform this action, please LOG IN')
      return
    }

    dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }))

    dispatch(showLoading())

    try {
      await api.upVoteThread(threadId)
    } catch (error) {
      window.alert(error.message)
      dispatch(toggleNeutralVoteThreadActionCreator({ threadId, userId: authUser.id }))
    }

    dispatch(hideLoading())
  }
}

function asyncToggleDownVoteThread (threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState()

    if (!authUser) {
      window.alert('you are unauthorized to perform this action, please LOG IN')
      return
    }

    dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }))

    dispatch(showLoading())

    try {
      await api.downVoteThread(threadId)
    } catch (error) {
      window.alert(error.message)
      dispatch(toggleNeutralVoteThreadActionCreator({ threadId, userId: authUser.id }))
    }

    dispatch(hideLoading())
  }
}

function asyncToggleNeutralVoteThread (threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState()

    if (!authUser) {
      window.alert('you are unauthorized to perform this action, please LOG IN')
      return
    }

    dispatch(toggleNeutralVoteThreadActionCreator({ threadId, userId: authUser.id }))

    dispatch(showLoading())

    try {
      await api.neutralizeThreadVote(threadId)
    } catch (error) {
      window.alert(error.message)
      dispatch(toggleNeutralVoteThreadActionCreator({ threadId, userId: authUser.id }))
    }

    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleUpVoteThreadActionCreator,
  toggleDownVoteThreadActionCreator,
  toggleNeutralVoteThreadActionCreator,
  asyncAddThread,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  asyncToggleNeutralVoteThread
}
