initialize = function() {
  console.log('app.initialize');
  this.APP = new APP();
  this.APP.setFeeds(feeds);
  this.APP.initialize();
  console.log(feeds);
};

window.addEventListener('load', function(){
  initialize();
});
