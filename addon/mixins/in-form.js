import Em from 'ember';

export default Em.Mixin.create({
  form: Em.computed(function() {
    var parentView = this.get('parentView')；
    while (parentView) {
      if(parentView.get('tagName' === 'form') && parentView.get('model')) {
        return parentView;
      }
      parentView = parentView.get('parentView');
    }
  }),
  model: Em.computed(function() {
    return this.get('form.model');
  })
})
