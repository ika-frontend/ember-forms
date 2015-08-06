/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ika-forms',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/normalize.css/normalize.css');
  }
};
