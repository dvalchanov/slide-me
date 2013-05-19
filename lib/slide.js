;(function(exports) {

  /**
   * Different transformation for different browsers.
   *
   * @type {Array}
   * @api private
   */
  var transformations = [
    "webkitTransform",
    "msTransform",
    "MozTransform",
    "OTransform"
  ];

  /**
   * CSS format for translation.
   *
   * @param {Object} options
   * @api private
   */
  var translate = function(options) {
    return "translate3d("
      + (options.x || 0) + "px, "
      + (options.y || 0) + "px, "
      + (options.z || 0) + "px)";
  };

  /**
   * Execute the transformation.
   *
   * @param {Object} options
   * @api private
   */
  var transform = function(options) {
    var props = transformations
      , len = props.length
      , style = this.target.style || this.target.el[0].style;

    for (var i = 0; i < len; i++) {
      if (style[props[i]] != undefined) {
        style[props[i]] = translate(options);
      }
    };
  };

  /**
   * Initialize a new SlideMe of there is none.
   *
   * @param {string} selector
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
   *
   * @api public
   */
  SlideMe.prototype.next = function() {
    this.current += 1;
    return this;
  };

  /**
   * Set the current page position to the previous number.
   *
   * @api public
   */
  SlideMe.prototype.previous = function() {
    this.current -= 1;
    return this;
  };

  /**
   * Set the current page position to the provided number.
   *
   * @param {number} num
   * @api public
   */
  SlideMe.prototype.page = function(number) {
    this.current = number - 1;
    return this;
  };

  /**
   * Set the current page position to first.
   */
  SlideMe.prototype.first = function() {
    this.current = 0;
    return this;
  };

  /**
   * Set the current page position to last.
   */
  SlideMe.prototype.last = function() {
    this.current = this.target.children.length - 1;
    return this;
  };

  /**
   * Sliding duration
   * TODO
   * Include other browsers transitions!!
   *
   * @param {number} number
   * @param {string} unit
   * @api public
   */
  SlideMe.prototype.within = function(duration, unit) {
    var unit = this.shorten(unit);

    this.target.style.webkitTransitionDuration = duration + unit + "";

    return this;
  };

  /**
   * Shortens the time unit in appropriate format.
   *
   * @param {String} unit
   * @api public
   */
  SlideMe.prototype.shorten = function(unit) {
    switch(unit) {
      case "seconds":
        return "s"; break;
      case "second":
        return "s"; break;
      case "milliseconds":
        return "ms"; break;
      case "millisecond":
        return "ms"; break;
      case "ms":
        return "ms"; break;
      default:
        return "s";
    }
  };

  /**
   * Execute the sequence.
   * TODO
   *
   * @api public
   */
  SlideMe.prototype.end = function() {
    var path = -this.element.offsetWidth * this.current;
    var args = {
      x: path
    };

    transform.call(this, args);
  };

  /**
   * Blank chain property.
   *
   * @type {Object}
   * @api public
   */
  SlideMe.prototype.to = SlideMe.prototype;

  /**
   * Construct new SlideMe object.
   *
   * @param {string} selector
   * @api public
   */
  exports.slideMe = function (selector){
    return new SlideMe(selector);
  };

  exports.SlideMe = SlideMe;
})(this);
