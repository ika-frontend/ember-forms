import Em from 'ember';
import FormWrapComponent from '../wrap';
import ControlMixin from '../../mixins/control';
import generateComponent from '../../helpers/generate-component';

var SelectWrapComponent = FormWrapComponent.extend({
  content: '',
  optionValuePath: 'content',
  optionLabelPath: 'content',
  selection: '',
  prompt: void 0
});

var SelectComponent = Em.Select.extend(ControlMixin, {
    content: Em.computed.alias('parentView.content'),
    optionValuePath: Em.computed.alias('parentView.optionValuePath'),
    optionLabelPath: Em.computed.alias('parentView.optionLabelPath'),
    selection: Em.computed.alias('parentView.selection'),
    prompt: Em.computed.alias('parentView.prompt')
});


export default generateComponent(SelectWrapComponent, SelectComponent);
export { SelectWrapComponent, SelectComponent };
