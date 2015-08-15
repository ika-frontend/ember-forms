import Em from 'ember';
import FormWrapComponent from '../wrap';
import ControlMixin from '../../mixins/control';
import generateComponent from '../../helpers/generate-component'

var ControlView = Em.TextField.extend(ControlMixin);

export default generateComponent(FormWrapComponent, ControlView);
