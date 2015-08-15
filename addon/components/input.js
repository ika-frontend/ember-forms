import Em from 'ember';
import FormWrapComponent from './wrap';
import ControlMixin from '../mixins/control';

export default FormWrapComponent.extend({
  controlView: Em.TextField.extend(ControlMixin),
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
