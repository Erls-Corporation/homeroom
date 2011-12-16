
// MODULES
var vows = require("vows");
var assert = require("assert");
var should = require("should");

// HOMEROOM
var homeroom = require("../lib/homeroom");

// VOWS!
vows.describe("General Module Tests").addBatch({
  "when instantiating homeroom" : {
    topic : function() { 
      return homeroom;
    },
    "homeroom should be a function" : function(topic) {
      topic.should.be.a("function");
    },
  },
  "when creating a class called mathematics with a method multiple" : {
    topic : function() {
      var mathematics = new homeroom("mathematics", {
        __constructor() : function() {
          console.log("class instantiated");
        },
        __destructor() : function() {
          console.log("class destroyed");
        },
        multiply : function(a, b) {
          return a*b;
        }
      });
      return mathematics.multiply(10, 10);
    },
    "mathematics.multiply(10, 10) should return 100" : function(topic) {
      assert.equal(topic, 100);
    }
  }
}).export(module);

/* EOF */