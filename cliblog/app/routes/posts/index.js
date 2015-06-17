import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model) {
    controller.set('model', model);
  },
       model: function() {
	      return this.get('store').find('post');
//return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls');
       }
});
