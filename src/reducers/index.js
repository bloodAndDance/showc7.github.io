import { combineReducers } from 'redux'
import page from './page'
import user from './users'
import feeds from './feeds'
import settings from './settings'

export default combineReducers({
  page,
  user,
  feeds,
  settings
})
