(function(global) {
  var self;
  function APP() {
    console.log('APP.constructor');
    self = this;
    this.RSS = new RSS();
    this.Renderer = new Renderer();
  }

  APP.prototype.setFeeds = function (list) {
      this.feeds = list;
  };

  APP.prototype.initialize = function () {
    console.log('app.initialize');
    this.showStartPage();
  };

  APP.prototype.showStartPage = function () {
    console.log('app.showStartPage');
    console.log(this.feeds);
    console.log(this);
    _.forEach(this.feeds, function(item){
      console.log(item);
      self.RSS.getList(item, 1).done(function (result){
        console.log(result);
      });

    });
  };

  global.APP = APP;
})(window);
