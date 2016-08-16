import $ from 'jquery';
import {
  LOAD_NEWS_REQUEST,
  LOAD_NEWS_SUCCESS
} from '../constants/FeedSource';

function loadInfo(url, newsCount, cb) {
  $.ajax({
      url      : 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + newsCount + '&callback=?&q=' + encodeURIComponent(url),
      dataType : 'json',
      success  : function (data) {
        console.log('AJAX');
        console.log(data);
        cb(data.responseData.feed.entries);
      }
  });
}

export function getNews(sourceUrl, newsCount=20) {
  console.log('!!! call getNews()');
  return (dispatch) => {
    console.log(dispatch);
    console.log('!!! in getNews() return');
    dispatch({
      type: LOAD_NEWS_REQUEST,
      payload: sourceUrl
    })

    loadInfo(sourceUrl, newsCount, (data) => {
      console.log(data);
      dispatch({
        type: LOAD_NEWS_SUCCESS,
        payload: data
      })
    });
  }
}
