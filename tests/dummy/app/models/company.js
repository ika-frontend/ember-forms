import Base from './base';

export default Base.extend({
  validations: {
    name: {
      presence: true,
      length: { minimus: 5 }
    },
    address: {
      presence: true,
      length: { minimus: 5 }
    },
    capital: {
      presence: true,
      numericality: true
    },
    employeeCount: {
      presence: true,
      numericality: true
    }
  }
});
