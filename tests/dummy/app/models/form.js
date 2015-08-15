import Base from './base';

export default Base.extend({
  validations: {
    name: {
      presence: true,
      length: { minimus: 5 }
    },
    password: {
      presence: true
    },
    country: {
      presence: true
    }
  }
});
