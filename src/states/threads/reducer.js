import { ActionType } from "./action"

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads
    case ActionType.ADD_THREAD:
      return [action.payload.threads, ...threads]
    case ActionType.TOGGLE_VOTE_UP_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: [...thread.upVotesBy, action.payload.userId]
          }
        }
        return thread
      })
    case ActionType.TOGGLE_VOTE_DOWN_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: [...thread.downVotesBy, action.payload.userId]
          }
        }
        return thread
      })
    default:
      return threads
  }
}

export default threadsReducer