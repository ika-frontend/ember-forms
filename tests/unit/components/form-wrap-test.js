import Em from 'ember';
import { module } from 'qunit';

var Model = Em.Object.extend();
var model = null;
Em.run(function() {
  model = Model.create({
    name: 'kkdashu'
  });
});


module('Testing EmFormComponent', {
  beforeEach: function() {

  }
});

