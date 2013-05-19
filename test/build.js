require.config({
  baseUrl:'../vendors',
  urlArgs: "v="+(new Date()).getTime(),
});

require(['require', 'chai', 'sinon', 'mocha'], function(require, chai, sinon){
  assert = chai.assert;
  should = chai.should();
  expect = chai.expect;

  mocha.setup('bdd');

  var specs = [
    "slide_spec.js"
  ];

  require(specs, function(){
    mocha.run();
  });
});
