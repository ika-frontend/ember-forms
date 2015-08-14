import Em from 'ember';
import CompanyModel from '../../models/company'

export default Em.Route.extend({
  model: function() {
    return CompanyModel.create({
      name: '',
      address: '',
      capital: 0,
      employeeCount: 0
    });
  }
});
