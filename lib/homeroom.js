
/*!

  homeroom
  homeroom, the only class that I ever went to
  A NodeJS Class Factory
  https://github.com/edwardhotchkiss/homeroom/

 */

var homeroom = module.exports = function(className, properties){
  var self = this;
  for (property in properties){
    self[property] = properties[property];
  };
  self.className = className || 'default';
  self._get = function(propertyName) {
    var property = this[propertyName];
    if (property === undefined) {
      return undefined;
    } else {
      return property;
    }
  };
  self._set = function(propertyName, value) {
    var property = this[ propertyName ];
    if (property  === undefined ) {
      this[propertyName] = value;
    } else {
      (typeof this[propertyName] == 'function') ? this[propertyName](value) : this[propertyName] = value;
    };
  };
  self.__constructor = function(fn) {
    fn.apply(this, this.arguments);
  };
  self.__destructor = function(fn) {
    //fn.apply(this, this.arguments);
  };
  return self;
};

/* EOF */