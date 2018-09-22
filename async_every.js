//function.js: Functional Logic.

define([
	"promise",
	"AsyncIterator"
], function(
	promise,
	AsyncIterator
) {
  return function( Input ) {
	return promise(function( resolve, reject ) {
			var xAsyncIterator = new AsyncIterator({
				"Set": Input.Set,
				"Function": Input.Function,
				"MustPassAll": true,
				"Validation": [function( Input ) {
					if ( Input ) {
						return true;
					} else {
						throw { "Message": "Did not pass validation."};
					}
				}]
			});

			xAsyncIterator.Iterate().then(function( State ) {
				resolve({
					"Status": true,
					"Results": State.get("Results")
				});
			}).catch(function( Error ) {
				reject({
					"Status": false,
					"Error": Error
				});
			});
	});
  };
});
