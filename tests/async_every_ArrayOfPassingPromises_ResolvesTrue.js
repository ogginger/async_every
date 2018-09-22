//async_every_ArrayOfPassingPromises_ResolvesTrue.js: Testing logic.

define([
	"async_every",
	"promise"
], function(
	async_every,
	promise
) {
	return {
		"Async": true,
		"Name":"async_every_ArrayOfPassingPromises_ResolvesTrue",
		"Input": {
			"Set": [function() {
				return promise(function( resolve ) {
					resolve( true );
				});
			}],
			"Function": function( Input ) {
				return promise(function( resolve, reject ) {
					Input().then(function( Result ) {
						resolve( Result );
					}).catch(function( Error ) {
						reject( Error );
					});
				});
			
			}
		},
		"Function": async_every,
		"ExpectedOutput": { "Status": true, "Results": [true] },
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
