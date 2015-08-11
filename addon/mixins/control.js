import { Em, Mixin, Binding } from 'ember';

export default Mixin.create({
  hasValue: Em.computed('value', function() {
    return this.get('value');
  }),

  init: function() {
    this.super();
    Binding.from("model.#{this.get('propertyName')}").to('value').connect(this);
  }
});
