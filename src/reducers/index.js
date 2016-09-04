import { combineReducers/*, applyMiddleware, createStore */} from 'redux';
import page from './page';
import user from './users';
import feeds from './feeds';
import settings from './settings';

import { routerReducer } from 'react-router-redux';

import * as storage from 'redux-storage';
//import createEngine from 'redux-storage-engine-localstorage';

/*
export default combineReducers({
  page,
  user,
  feeds,
  settings
})
*/

export default storage.reducer(combineReducers({page, user, feeds, settings, routing: routerReducer}));
/*
const engine = createEngine('my-save-key');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddleware(reducer);
const load = storage.createLoader(engine);
load(store);
load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));
*/
