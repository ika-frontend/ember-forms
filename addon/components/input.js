import Em from 'ember';
import FormWrapComponent from './wrap';
import ControlMixin from '../mixins/control';

export default FormWrapComponent.extend({
  controlView: Em.TextField.extend(ControlMixin, {
    attributeBindings: ['placeholder', 'required', 'autofocus', 'disabled', 'name'],
    placeholder: Em.computed.alias('parentView.placeholder'),
    required: Em.computed.alias('parentView.required'),
    autofocus: Em.computed.alias('parentView.autofocus'),
    disabled: Em.computed.alias('parentView.disabled'),
    type: Em.computed.alias('parentView.type'),
    model: Em.computed.alias('parentView.model'),
    propertyName: Em.computed.alias('parentView.propertyName'),
    'name': Em.computed.alias('propertyName')
  }),
  viewId: Em.computed('control', function() {
    var controlView = this.get('control');
    return controlView && controlView.elementId;
  }),
  property: void 0,
  label: void 0,
  placeholder: void 0,
  required: void 0,
  autofocus: void 0,
  disabled: void 0
});
