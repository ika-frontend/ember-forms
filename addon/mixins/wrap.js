import Em from 'ember';

export default Em.Mixin.create({
  init: function() {
    this._super();
  },
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
