import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gettingStarted');
  this.resource('controls', function() {
    this.route('input');
  });
});

export default Router;
