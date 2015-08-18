import Em from 'ember';
import ContainerMixin from 'ember-ika-layouts/mixins/container';

/**
 * Form Component
 Syntax:
 {{em-form
  model="some_model_instance"
 }}
 */
export default Em.Component.extend(ContainerMixin, {
  tagName: 'form',
  isFluid: true,
  attributeBindings: ['role', 'fixed-id'],
  role: 'form',

  isValidate () {
    var model = this.get('model'),
        e = model.errors;
    var keys = Object.keys(e),
        hasError = false;
    keys.forEach(function(key) {
      if(e.hasOwnProperty(key)) {
        if(e[key].length > 0) {
          hasError = true;
        }
      }
    });
    return !hasError;
  },
  /**
   * Form Model
   * @type {object}
   */
  model: undefined
});
