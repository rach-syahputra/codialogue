import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  SET_CATEGORIES: 'SET_CATEGORIES',
}

function setCategoriesActionCreator(categories) {
  return {
    type: ActionType.SET_CATEGORIES,
    payload: {
      categories,
    },
  }
}

function asyncSetCategories(categories) {
  return async (dispatch) => {
    dispatch(showLoading())

    try {
      dispatch(setCategoriesActionCreator(categories))
    } catch (error) {
      alert(error.message)
    }

    dispatch(hideLoading())
  }
}

export { ActionType, asyncSetCategories }
