import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('new');
  });
  this.route('post', { path: '/posts/:post_id' }, function() {
    this.route('comment', { path: 'comments/:comment_id' });
    this.route('comments', function() {
      this.route('new');
    });
  });
});

export default Router;
