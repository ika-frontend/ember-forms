import Em from 'ember';
import { test, module } from 'qunit';
import InFormMixin from 'ember-ika-forms/mixins/in-form';
import FormComponent from 'ember-ika-forms/components/form';

var Component;

module('Testing InForm Mixin', {
  beforeEach: function() {
    Component = Em.Component.extend(InFormMixin, {
    });
  }
});

test('ParentView and model', function(assert) {
  var parentView = FormComponent.create();
  parentView.set('model', {name: 'kkdashu'});
  var child = Component.create({
    parentView: parentView
  });
  assert.equal('form', child.get('form').get('tagName'));
  assert.equal('kkdashu', child.get('model').name);
});

test('ParentView is not a form', function(assert) {
  var parentView = Em.Component.create();
  var child = Component.create({
    parentView: parentView
  });
  assert.equal(null, child.get('form'));
  assert.equal(null, child.get('model'));
});

test('Nested view', function(assert) {
  var view1 = Em.Component.create(),
      view2 = FormComponent.create({
        parentView: view1,
        model: {name: 'kkdashu'}
      }),
      view3 = Em.Component.create({
        parentView: view2
      }),
      view = Component.create({
        parentView: view3
      });
  assert.equal('kkdashu', view.get('model').name);
});
