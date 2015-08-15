import Em from 'ember';

export default Em.Component.extend({
  tagName: 'label',
  classNames: ['control-label'],
  attributeBindings: ['for'],
  'for': Em.computed.alias('parentView.viewId')
});
