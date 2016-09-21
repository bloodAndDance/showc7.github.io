import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';


export default function configureStore(initialState) {
  const logger = createLogger()
  const engine = createEngine('my-save-key');
  const middleware = storage.createMiddleware(engine);
  const createStoreWithMiddleware = applyMiddleware(thunk, logger, middleware)(createStore);
  const store = createStoreWithMiddleware(rootReducer);
  const load = storage.createLoader(engine);
  load(store);
  load(store)
      .then((newState) => console.log('Loaded state:', newState))
      .catch(() => console.log('Failed to load previous state: ',initialState));
  /*
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger))
*/
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
