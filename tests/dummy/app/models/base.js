import Em from 'ember';
import EV from 'ember-validations';

export default Em.Object.extend(EV, {
  /**
   * 临时解决方案
   * 指定container
   **/
  container: window.Dummy.__container__
});
