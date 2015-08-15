/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ika-forms',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ember/ember-template-compiler.js');
    app.import(app.bowerDirectory + '/select2/dist/css/select2.css');
    app.import(app.bowerDirectory + '/select2/dist/js/select2.js');
  }
};
