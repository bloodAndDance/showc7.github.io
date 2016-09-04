import {
  LOAD_NEWS_REQUEST,
  LOAD_NEWS_SUCCESS,
  ADD_SOURCE,
  REMOVE_SOURCE,
  SET_NEWS_COUNT
} from '../constants/FeedSource'

const initialState = {
  feedsURLs: [
        {url:'http://habrahabr.ru/rss/interesting/', name:'interesting'},
        {url:'https://habrahabr.ru/rss/hub/azure/', name: 'azure'},
        {url:'https://habrahabr.ru/rss/hub/virus/', name: 'virus'},
        {url:'https://habrahabr.ru/rss/hub/development/', name: 'development'},
        {url:'https://www.adme.ru/rss/', name: 'adme'}
    ],
  fetching: false,
  feedSourceInfo: [],
  newsCount: 20
}

export default function feeds(state=initialState, action) {
  switch (action.type) {
    case LOAD_NEWS_REQUEST:
      return { ...state, feedSourceInfo: action.payload, fetching: true};

    case LOAD_NEWS_SUCCESS:
      return { ...state, feedSourceInfo: action.payload, fetching: false};

    case ADD_SOURCE:
      return { ...state, feedsURLs: [ ...state.feedsURLs, {...action.payload} ]};

    case REMOVE_SOURCE:
      var urls = state.feedsURLs.slice();
      urls.splice(action.payload, 1);
      return { ...state, feedsURLs: [ ...urls ]};

    case SET_NEWS_COUNT:
      return { ...state, newsCount: action.payload }

    default:
      return state;
  }
}
