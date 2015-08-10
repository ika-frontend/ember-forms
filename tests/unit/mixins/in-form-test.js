import Em from 'ember';
import { test, module } from 'qunit';
import InFormMixin from 'ember-ika-forms/mixins/in-form';
import FormComponent from 'ember-ika-forms/components/form';

var Component, ParentComponent;

module('Testing InForm Mixin', {
  beforeEach: function() {
    ParentComponent = FormComponent;
    Component = Em.Component.extend(InFormMixin, {
    });
  }
});

test('ParentView and model', function(assert) {
  var parentView = ParentComponent.create();
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
