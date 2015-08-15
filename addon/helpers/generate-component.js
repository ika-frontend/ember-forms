import Em from 'ember';
import WrapComponent from '../components/wrap';
import ControlMixin from '../mixins/control';
import WrapMixin from '../mixins/wrap';

function generateComponent(wrap, control){
  return wrap.extend({
    controlView: control
  });
}

export default generateComponent;
