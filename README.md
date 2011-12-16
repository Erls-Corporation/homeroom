
homeroom
========

# homeroom, the only class that I ever went to (a NodeJS Class Factory)

```javascript

var homeroom = require("homeroom");

var myModule = new homeroom("myModule" {
	__constructor() : function() {
		console.log("class instantiated");
	},
	__destructor() : function() {
		console.log("class destroyed");
	},
	multiply : function(a, b) {
		console.log(a*b);
	}
});

myModule.multiply(10, 10);
=> 100

/* EOF */
```