
/*!

  homeroom
  homeroom, the only class that I ever went to
  A NodeJS Class Factory
  https://github.com/edwardhotchkiss/homeroom/

 */

var homeroom = module.exports =  function(){};

homeroom.className = 'default';

/*!
  prototype inheritence for:
  - getters
  - setters
  - constructors
  - destructors

*/

homeroom.prototype = {
  _get : function(propertyName) {
    var property = this[propertyName];
    if (property === undefined) {
      return undefined;
    } else {
      return property;
    }
  },
  _set : function(propertyName, value) {
    var property = this[ propertyName ];
    if (property  === undefined ) {
      this[propertyName] = value;
    } else {
      (typeof this[propertyName] == 'function') ? this[propertyName](value) : this[propertyName] = value;
    };
  },
  __constructor : function(fn) {
    fn.apply(this, this.arguments);
  },
  __destructor : function(fn) {
    fn.apply(this, this.arguments);
  }
};

exports.extends = function() {
  return self;
};

/* EOF */