(function (global){
  function RSS () {
    console.log('RSS.constructor');
  }

  function httpGet(url, count, dfd) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + count + '&q=' + url, true);
    xhr.onreadystatechange = function() {
      if(xhr.readyState != 4) {
        dfd.reject();
        return;
      }
      if(xhr.status != 200) {
        dfd.reject(shr.status);
      } else {
        dfd.resolve(JSON.parse(xhr.responseText).responseData.feed.entries);
      }
    }

    xhr.send(null);
  }

  RSS.prototype.getList = function (feedURL,count) {
    console.log('Rss.getList');
    if(!count) {
      count = 10;
    }
    var dfd = new $.Deferred();
    httpGet.call(this, feedURL, count, dfd);
    return dfd;
  };

  global.RSS = RSS;
})(window)
