import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './authUser/reducer'
import isPreloadReducer from './isPreload/reducer'
import threadsReducer from './threads/reducer'
import threadDetailReducer from './threadDetail/reducer'
import usersReducer from './users/reducer'
import categoriesReducer from './categories/reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'
import leaderboardsReducer from './leaderboards/reducer'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    users: usersReducer,
    categories: categoriesReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    })
})

export default store
