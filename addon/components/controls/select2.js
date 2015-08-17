import Em from 'ember';
import { SelectComponent, SelectWrapComponent } from './select';
import generateComponent from '../../helpers/generate-component';

var Select2WrapComponent = SelectWrapComponent.extend({
  placeholder: '',
  allowClean: true
});

var Select2Component = SelectComponent.extend({
  placeholder: Em.computed.alias('parentView.prompt'),
  allowClean: Em.computed.alias('parentView.allowClean'),
  didInsertElement: function() {
    this.$().select2({
      allowClean: this.get('allowClean'),
      placeholder: this.get('placeholder')
    });
  }
});

export default generateComponent(Select2WrapComponent, Select2Component);
