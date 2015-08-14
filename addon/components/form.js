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

  /**
   * Form Model
   * @type {object}
   */
  model: undefined
});
