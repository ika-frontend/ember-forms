import Em from 'ember';

/**
 * InFormMixin 查找包含的form元素
 * 所有的form组件都必须是em-form的子视图
 */
export default Em.Mixin.create({
  /**
   * Form
   * 获取form组件
   */
  form: Em.computed(function() {
    var parentView = this.get('parentView');
    while (parentView) {
      if(parentView.get('tagName') === 'form' && parentView.get('model')) {
        return parentView;
      }
      parentView = parentView.get('parentView');
    }
  }),

  /**
   * model
   * 获取表单的模型
   */
  model: Em.computed(function() {
    return this.get('form.model');
  })
});
