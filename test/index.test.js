
// MODULES
var vows = require("vows");
var assert = require("assert");
var should = require("should");

// CORE
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
  }
}).export(module);

/* EOF */