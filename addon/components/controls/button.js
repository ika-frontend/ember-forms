import Em from 'ember';
import FormWrap from '../wrap';
import ControlMixin from '../../mixins/control';
import generateComponent from '../../helpers/generate-component';

/**
 * Button组件的Wrap
 */
var ButtonWrapComponent = FormWrap.extend({
  /**
   * button不需要显示label
   */
  label: void 0,

  /**
   * button 不需要显示验证相关信息
   */
  needValidation: false,

  /**
   * 显示文字
   */
  text: '',
  displayText: '',

  /**
   * 异步请求中显示的文字
   */
  executingText: '提交中...',

  /**
   * 点击事件接收的额外参数
   */
  argument: '',

  /**
   * 相应按钮的点击事件
   * 再触发om-click事件
   */
  onClick () {
    var self = this,
        form = this.get('form');
    form.set('canShowErrors', true);
    if(!form.isValidate()) {
       return;
    }
    this.sendAction('on-click', function(promise) {
      self.set('promise', promise);
      self.set('status', 'executing');
    }, this.get('argument'));
  },

  /**
   * 组件暴露给应用程序的点击事件
   */
  'on-click': '',

  changeStatusByPromise: Em.observer('promise', function() {
    var promise = this.get('promise');
    var self = this;
    promise.then(function() {
      self.set('status', 'resolved');
    }, function(err) {
      self.set('status', 'resolved');
      self.set('error', err);
    });
  }),

  /**
   * 按钮状态
   * executing: 执行中
   * resolved: 执行完成
   */
  status: 'default',

  changeTextByStatus: Em.on('init', Em.observer('status', function() {
    var status = this.get('status');
    if(status == 'executing') {
      this.set('displayText', this.get('executingText'));
    } else {
      this.set('displayText', this.get('text'));
    }
  }))
});


/**
 * Button组件
 */
var ButtonComponent = Em.Component.extend(ControlMixin, {
  tagName: 'button',
  classNames: ['btn', 'btn-default'],
  layoutName: 'components/em-button',
  text: Em.computed.alias('parentView.displayText'),
  isInput: false,
  executingText: Em.computed.alias('parentView.executingText'),
  click () {
    var parentView = this.get('parentView');
    var self = this;
    parentView['onClick'].call(parentView);
  }
});

export default generateComponent(ButtonWrapComponent, ButtonComponent);
