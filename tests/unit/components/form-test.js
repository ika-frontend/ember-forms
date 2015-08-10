import Em from 'ember';
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('em-form', "EmFormComponent", {});

test('tag is form', function(assert) {
  assert.equal('FORM', this.$().get(0).tagName);
});

test('form is a container', function(assert) {
  var form = this.subject();
  Em.run(function() {
    form.set('isFluid', true);
  });
  assert.equal(true, this.$().hasClass('container-fluid'));
});
