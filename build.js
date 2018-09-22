//build.js: Configuration file for optimizing the async_every function. 
/*
	jquery is left empty because the nodejs implementation of jquery is used instead.
*/ 
({
    paths: {
	"jquery": "empty:",
	"underscore": "lib/underscore.min",
	"backbone": "lib/backbone.min",
	"rsvp": "lib/rsvp.min",
	"promise": "lib/promise.min",
	"validate": "lib/validate.min",
	"AsyncValidate": "lib/async_validate.min",
	"AsyncIterator": "lib/async_iterator.min",
	"log": "lib/log.min"
    },
    exclude: [ 
	"log", 
	"underscore", 
	"jquery", 
	"backbone", 
	"promise", 
	"rsvp", 
	"validate", 
	"AsyncValidate",
	"AsyncIterator"
    ],
    name: "async_every",
    out: "async_ever.min.js"
})
