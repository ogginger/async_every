//test_async_every.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "async_every",
	"tests/async_every_ArrayOfPassingPromises_ResolvesTrue"
], function(
  TestSuite,
  log,
  async_every,
	async_every_ArrayOfPassingPromises_ResolvesTrue
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_async_every initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "async_every" );
	xTestSuite.add( async_every_ArrayOfPassingPromises_ResolvesTrue );            
      xTestSuite.test();
    }
  });
});
