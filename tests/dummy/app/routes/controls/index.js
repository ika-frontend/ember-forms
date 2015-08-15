import Em from 'ember';
import FormModel from '../../models/form';

export default Em.Route.extend({
  model: function() {
    return FormModel.create();
  }
});
