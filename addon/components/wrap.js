import Em from 'ember';
import InFormMixin from 'ember-ika-forms/mixins/in-form';
import HasPropertyMixin from 'ember-ika-forms/mixins/has-property';
import ColMixin from 'ember-ika-layouts/mixins/col';
import WrapMixin from '../mixins/wrap';

export default Em.Component.extend(ColMixin, InFormMixin, HasPropertyMixin, WrapMixin, {
  classNameBindings: ['class', 'hasSuccess', 'hasError'],
  classNames: ['form-group'],
  layoutName: 'components/form-wrap',
  label: void 0,
  canShowErrors: false,
  needValidation: true,
  hasSuccess: Em.computed('status', function() {
    return this.get('status') === 'success';
  }),
  hasError: Em.computed('status', 'form.canShowErrors', function() {
    return this.get('status') === 'error' && this.get('form.canShowErrors');
  }),
  required: Em.computed(function() {
    var propertyName = this.get('propertyName'),
        model = this.get('model');
    if(model && model.validations && model.validations[propertyName] && model.validations[propertyName].presence) {
      return true;
    }
    return false;
  })
});
