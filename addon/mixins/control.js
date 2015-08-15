import Em from 'ember';

export default Em.Mixin.create({
  classNames: ['form-control'],
  hasValue: Em.computed('value', function() {
    return this.get('value');
  }),

  isControl: true,

  init: function() {
    this._super();
    Em.Binding.from("model." + this.get('propertyName')).to('value').connect(this);
  }
});
