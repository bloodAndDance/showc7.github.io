import { combineReducers } from 'redux'
import page from './page'
import user from './users'
import feeds from './feeds'

export default combineReducers({
  page,
  user,
  feeds
})
