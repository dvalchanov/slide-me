define(["jquery", "../lib/slide"],
function() {
  describe("SlideMe", function() {
    it("should be initialized", function() {
      var slideMe = new SlideMe();

      expect(slideMe).to.be.an.instanceof(SlideMe);
    });

    it("should take selector for the container of the slider", function() {
      var slideMe = new SlideMe("slider");

      expect(slideMe.target.innerHTML).to.equal("");
    });

    describe("next", function() {
      it("should turn the counter up", function() {
        var slideMe = new SlideMe();
        expect(slideMe.current).to.equal(0);

        slideMe.next();

        expect(slideMe.current).to.equal(1);
      });
    });

    describe("page", function() {
      it("set the counter to current page", function() {
        var slideMe = new SlideMe();
        expect(slideMe.current).to.equal(0);

        slideMe.page(5);

        expect(slideMe.current).to.equal(5);
      });
    });

    describe("previous", function() {
      it("set the counter to current page", function() {
        var slideMe = new SlideMe();

        slideMe.page(1);
        expect(slideMe.current).to.equal(1);

        slideMe.previous();
        expect(slideMe.current).to.equal(0);
      });
    });
  });
});
