import { ActionType } from './action'

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail
    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments],
      }
    case ActionType.TOGGLE_UP_VOTE_THREAD:
      return {
        ...threadDetail,
        upVotesBy: [...threadDetail.upVotesBy, action.payload.userId],
      }
    case ActionType.TOGGLE_DOWN_VOTE_THREAD:
      return {
        ...threadDetail,
        downVotesBy: [...threadDetail.downVotesBy, action.payload.userId],
      }
    case ActionType.TOGGLE_NEUTRAL_VOTE_THREAD:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.userId),
      }
    default:
      return threadDetail
  }
}

export default threadDetailReducer
