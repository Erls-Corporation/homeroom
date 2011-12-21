
/*!
  Core Modules
 */

var mathematics,
    vows = require('vows'),
    assert = require('assert'),
    should = require('should'),
    Class = require('../lib/homeroom');

/*!
  Vows
 */
 
vows.describe('General Module Tests').addBatch({
  'when instantiating homeroom' : {
    topic : function() { 
      return Class;
    },
    'homeroom should be a function' : function(topic) {
      topic.should.be.a('function');
    },
  },
  'when creating a class called mathematics with a method multiple' : {
    topic : function() {
      mathematics = new Class('mathematics', {
        __constructor:function() {
          console.log('class instantiated');
        },
        __destructor:function() {
          console.log('class destroyed');
        },
        multiply:function(a, b) {
          return a*b;
        }
      });
      return mathematics.multiply(10, 10);
    },
    'mathematics.multiply(10, 10) should return 100' : function(topic) {
      assert.equal(topic, 100);
    }
  }
}).export(module);

/* EOF */