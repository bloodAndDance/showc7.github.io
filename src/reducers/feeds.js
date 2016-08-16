import {
  LOAD_NEWS_REQUEST,
  LOAD_NEWS_SUCCESS
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
  initLoading: false
}

export default function feeds(state=initialState, action) {
  switch (action.type) {
    case LOAD_NEWS_REQUEST:
      return { ...state, feedSourceInfo: action.payload, fetching: true, initLoading: true};

    case LOAD_NEWS_SUCCESS:
      return { ...state, feedSourceInfo: action.payload, fetching: false};

    default:
      return state;
  }
}
