import Em from 'ember';

export default Em.Mixin.create({
  property: void 0,
  label: void 0,
  placeholder: void 0,
  required: void 0,
  autofocus: void 0,
  disabled: void 0,
  viewId: Em.computed('control', function() {
    var controlView = this.get('control');
    return controlView && controlView.elementId;
  }),

  init: function() {
    this._super();
  },

  /**
   * 设置control属性
   * 指向具体的输入控件
   **/
  didInsertElement: function() {
     var childViews = this.get('childViews');
     var controlView = childViews.filter(function(view) {
       return view.isControl;
     });
     if(controlView.length) {
       this.set('control', controlView[0]);
     }
  }
});
