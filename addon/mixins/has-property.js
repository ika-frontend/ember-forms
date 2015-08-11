import { Em, Mixin, Binding, assert } from 'ember';


export default Mixin.create({
  property: null,

  propertyName: Em.computed('parentView.property', function() {
    if(this.get('property')) {
      return this.get('property');
    } else if(this.get('parentView.property')) {
      return this.get('parentView.property');
    } else {
      assert(false, 'Property could not be found.');
    }
  }),

  init: function() {
    this.super();
    Binding.from('model.errors.' + this.get('propertyName').to('errors')).connect(this);
  },

  status: Em.computed('errors.length', function() {
    if(this.get('errors.length')) {
      return 'error';
    } else {
      return 'success';
    }
  })
});
