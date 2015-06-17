import Ember from 'ember';

export default Ember.Controller.extend({
    title: null,
    text: null,

    actions: {
        save: function(post) {
            var me = this;
            var newPost = this.get('store').createRecord('post', {
                title: this.get('title')
 //               text: this.get('text')
            });
            newPost.save().then(function() {
                me.get('target').transitionTo('posts.index');
            });
        }
    }
});
