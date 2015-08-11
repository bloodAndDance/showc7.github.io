(function (global) {
  function Renderer () {
    console.log('Renderer.constructor');
  }

  Renderer.prototype.renderStartPage = function (data) {
    console.log('renderer.renderStartPage');

  };

  global.Renderer = Renderer;
})(window)
