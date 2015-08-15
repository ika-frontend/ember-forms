import Em from 'ember';
import FormWrapComponent from './wrap';
import ControlMixin from '../mixins/control';

export default FormWrapComponent.extend({
  controlView: Em.TextField.extend(ControlMixin)
});
