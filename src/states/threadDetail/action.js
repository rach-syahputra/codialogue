import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD_ON_THREAD_DETAIL',
  TOGGLE_DOWN_VOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD_ON_THREAD_DETAIL',
  TOGGLE_NEUTRAL_VOTE_THREAD: 'TOGGLE_NEUTRAL_VOTE_THREAD_ON_THREAD_DETAIL',
  TOGGLE_UP_VOTE_COMMENT: 'TOGGLE_UP_VOTE_COMMENT',
  TOGGLE_DOWN_VOTE_COMMENT: 'TOGGLE_DOWN_VOTE_COMMENT',
  TOGGLE_NEUTRAL_VOTE_COMMENT: 'TOGGLE_NEUTRAL_VOTE_COMMENT'
}

function receiveThreadDetailActionCreator (threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail
    }
  }
}

function addCommentActionCreator (comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment
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

function toggleUpVoteCommentActionCreator ({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    }
  }
}

function toggleDownVoteCommentActionCreator ({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    }
  }
}

function toggleNeutralVoteCommentActionCreator ({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId
    }
  }
}

function asyncReceiveThreadDetail (threadId) {
  return async (dispatch) => {
    dispatch(showLoading())

    try {
      const threadDetail = await api.getThreadDetail(threadId)
      dispatch(receiveThreadDetailActionCreator(threadDetail))
    } catch (error) {
      window.alert(error.message)
    }

    dispatch(hideLoading())
  }
}

function asyncAddComment ({ threadId, content }) {
  return async (dispatch, getState) => {
    const { authUser } = getState()

    if (!authUser) {
      window.alert('you are unauthorized to perform this action, please LOG IN')
      return
    }

    dispatch(showLoading())

    try {
      const comment = await api.createComment({ threadId, content })
      dispatch(addCommentActionCreator(comment))
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

function asyncToggleUpVoteComment ({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState()

    if (!authUser) {
      window.alert('you are unauthorized to perform this action, please LOG IN')
      return
    }

    dispatch(toggleUpVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }))

    dispatch(showLoading())

    try {
      await api.upVoteComment({ threadId, commentId })
    } catch (error) {
      window.alert(error.message)
      dispatch(toggleNeutralVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }))
    }

    dispatch(hideLoading())
  }
}

function asyncToggleDownVoteComment ({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState()

    if (!authUser) {
      window.alert('you are unauthorized to perform this action, please LOG IN')
      return
    }

    dispatch(toggleDownVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }))

    dispatch(showLoading())

    try {
      await api.downVoteComment({ threadId, commentId })
    } catch (error) {
      window.alert(error.message)
      dispatch(toggleNeutralVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }))
    }

    dispatch(hideLoading())
  }
}

function asyncToggleNeutralVoteComment ({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState()

    if (!authUser) {
      window.alert('you are unauthorized to perform this action, please LOG IN')
      return
    }

    dispatch(toggleNeutralVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }))

    dispatch(showLoading())

    try {
      await api.neutralizeCommentVote({ threadId, commentId })
    } catch (error) {
      window.alert(error.message)
      dispatch(toggleNeutralVoteCommentActionCreator({ threadId, commentId, userId: authUser.id }))
    }

    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  addCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  asyncToggleNeutralVoteThread,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
  asyncToggleNeutralVoteComment
}
