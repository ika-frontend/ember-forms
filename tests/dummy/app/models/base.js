import Em from 'ember';
import EV from 'ember-validations';

export default Em.Object.extend(EV, {
  /**
   * 临时解决方案
   * 指定container
   **/
  container: window.Dummy.__container__,

  toString: function() {
    var keys = Object.keys(this);
    var result = "{ ";
    var self = this;
    keys.forEach(function(key) {
      if(self[key]){
        result +=( key + ' : ' + self[key] + ',' );
      }
    });
    result += ' }';
    return result;
  }
});
