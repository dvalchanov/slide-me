;(function(exports) {
  exports.slideMe = function (selector){
    return new SlideMe(selector);
  };

  exports.SlideMe = SlideMe;

  SlideMe.prototype.to = SlideMe.prototype;

  /**
   * Initialize a new SlideMe.
   *
   * @api public
   */
  function SlideMe(selector) {
    if(!(this instanceof SlideMe)) return new SlideMe(selector);

    this.to = this;
    this.target = document.getElementById(selector);
    this.element = this.target.children[0];
    this.current = 0;
  };

  /**
   * Set the current page position to the next number.
   */
  SlideMe.prototype.next = function() {
    this.current++;
    this.execute();
  };

  /**
   * Set the current page position to the previous number.
   */
  SlideMe.prototype.previous = function() {
    this.current--;
    this.execute();
  };

  /**
   * Set the current page position to the provided number.
   *
   * @param {number} num
   */
  SlideMe.prototype.page = function(number) {
    this.current = --number;
    this.execute();
  };

  SlideMe.prototype.execute = function() {
    var path = -this.element.offsetWidth * this.current;
    var args = {
      x: path
    };

    transform.call(this, args);
  };

  /**
   * Sliding duration.
   *
   * @param {number} number
   * @param {string} unit
   */
  SlideMe.prototype.within = function(number, unit) {
    this.target.style.webkitTransitionDuration = number + unit + "";

    return this;
  };

  /**
   * Execute the transformation.
   *
   * @param {Object} options
   */
  function transform(options) {
    var len = props.length
      , style = this.target.style || this.target.el[0].style;

    for (var i = 0; i < len; i++) {
      if (style[props[i]] != undefined) {
        style[props[i]] = translate(options);
      }
    };
  };

  function translate(options) {
    return "translate3d("
      + (options.x || 0) + "px, "
      + (options.y || 0) + ", "
      + (options.z || 0) + ")";
  };

  /**
   * Different transformation for differend browsers.
   *
   * @type {Array}
   */
  var props = [
    "webkitTransform",
    "msTransform",
    "MozTransform",
    "OTransform"
  ];

})(this);
