import Em from 'ember';

var countries = Em.A(['中国', '美国', '日本', '泰国']);
var provinces = Em.A([
  { name: '四川', id: 1 },
  { name: '北京', id: 2 },
  { name: '河北', id: 3 }
]);

export default Em.Controller.extend({
  countries: countries,
  provinces: provinces,
  actions: {
    submit: function(promise) {
      promise(new Em.RSVP.Promise(function(resolve, reject) {
          Em.run.later(function() {
            resolve({ msg: 'success'});
          }, 3000);
      }));
    }
  }
});
