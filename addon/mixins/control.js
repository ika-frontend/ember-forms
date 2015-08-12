import { Em } from 'ember';

export default Em.Mixin.create({
  hasValue: Em.computed('value', function() {
    return this.get('value');
  }),

  init: function() {
    this.super();
    //Em.Binding.from("model.#{this.get('propertyName')}").to('value').connect(this);
  }
});
