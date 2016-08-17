import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import Settings from './components/Settings'
import './styles/app.css'
import configureStore from './store/configureStore'
import NotFound from './components/NotFound'

import * as feedsListActions from './actions/FeedsListActions';

import { Router, Route, /*IndexRoute,*/ hashHistory } from 'react-router'

const store = configureStore()

class RouterEnterEventHandlers {
  static app(nextState, replaceState) {
    console.log('redirect to /source/0');
    replaceState({}, '/source/0');
  }

  static source(nextState) {
    console.log('onEnter (/source/:sourceId)');
    console.log(nextState);
    console.log(store);
    console.log(store.getState());
    console.log(store.getState().feeds);
    const { getNews } = feedsListActions;
    getNews(store.getState().feeds.feedsURLs[nextState.params.sourceId].url,
            store.getState().feeds.newsCount)(store.dispatch);
  }

  static settings() {
    // load config information
  }
}

render(
  <Provider store={store}>
    <div className='app'>
      <Router history={hashHistory}>
        <Route path='/' component={App} onEnter={ RouterEnterEventHandlers.app }/>
        <Route path='/settings' component={Settings} onEnter={ RouterEnterEventHandlers.settings }/>
        <Route path='/source/:sourceId' component={App} onEnter={ RouterEnterEventHandlers.source }/>
        <Route path='*' component={NotFound}/>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
