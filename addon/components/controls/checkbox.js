import Em from 'ember';
import FormWrapComponent from '../wrap';
import ControlMixin from '../../mixins/control';
import generateComponent from '../../helpers/generate-component';

var ControlView = Em.Checkbox.extend(ControlMixin, {
  type: 'checkbox',
  isInput: false,
  label: Em.computed.alias('parentView.label'),
  name: Em.computed.alias('parentView.propertyName'),
  init: function() {
    this._super();
    Em.Binding.from('model.' + this.get('propertyName')).to('checked').connect(this);
  }
});

var CheckboxWrapComponent = FormWrapComponent.extend({
  yieldLabel: true,
  controlWrapClass: 'checkbox',
  noLabelWrap: true,
  classNames: ['checkbox']
})

export default generateComponent(CheckboxWrapComponent, ControlView);
