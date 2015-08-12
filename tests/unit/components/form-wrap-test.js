import Em from 'ember';
import { test, module } from 'qunit';
import EmFormComponent from 'ember-ika-forms/components/form';
import EV from 'ember-validations';
import EmFormWrapComponent from 'ember-ika-forms/components/wrap';

var Model = Em.Object.extend(EV, {
  validations: {
    name: {
      presence: true,
      length: { minimum: 5 }
    }
  }
});
var model = undefined;
Em.run(function() {
  model = Model.create();
});

var emFormComponent = EmFormComponent.create({
  model: model
});

module('Testing EmFormComponent', {
  beforeEach: function() {

  }
});

test('col与model属性是否正确', function(assert) {
  var formWrap = EmFormWrapComponent.create({
    parentView: emFormComponent,
    col: 2,
    property: 'name'
  });
  Em.run(function() {
    formWrap.append();
  });
  assert.ok(formWrap.$().hasClass('col-md-2'));
  assert.equal(formWrap.get('model').name, 'kkdashu');
  console.log(formWrap.get('model'));
});
