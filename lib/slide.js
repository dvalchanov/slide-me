;(function(exports) {
  exports.slideMe = function (){
    return new SlideMe();
  };

  exports.SlideMe = SlideMe;

  /**
   * Initialize a new SlideMe.
   *
   * @api public
   */
  function SlideMe() {
    if(!(this instanceof SlideMe)) return new SlideMe();

    this.current = 0;
  };

  /**
   * Set the current page position to the next number.
   */
  SlideMe.prototype.next = function() {
    this.current++;
  };

  /**
   * Set the current page position to the provided number.
   *
   * @param {number} num
   */
  SlideMe.prototype.page = function(num) {
    this.current = num;
  };

  /**
   * Set the current page position to the previous number.
   */
  SlideMe.prototype.previous = function() {
    this.current--;
  };
})(this);
