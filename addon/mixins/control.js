import Em from 'ember';

export default Em.Mixin.create({
  classNameBindings: ['isInput:form-control'],
  hasValue: Em.computed('value', function() {
    return this.get('value');
  }),
  isInput: true,
  attributeBindings: ['placeholder', 'required', 'autofocus', 'disabled', 'name'],
  placeholder: Em.computed.alias('parentView.placeholder'),
  required: Em.computed.alias('parentView.required'),
  autofocus: Em.computed.alias('parentView.autofocus'),
  disabled: Em.computed.alias('parentView.disabled'),
  type: Em.computed.alias('parentView.type'),
  model: Em.computed.alias('parentView.model'),
  propertyName: Em.computed.alias('parentView.propertyName'),
  'name': Em.computed.alias('propertyName'),

  isControl: true,

  init: function() {
    this._super();
    Em.Binding.from("model." + this.get('propertyName')).to('value').connect(this);
  }
});
