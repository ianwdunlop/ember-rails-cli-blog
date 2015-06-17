import Ember from 'ember';

export default Ember.Controller.extend({
    needs: 'post',

    text: null,

    actions: {
        save: function() {
            var post = this.get('controllers.post.content');
            var comment = this.get('store').createRecord('comment', {
                post: post,
                text: this.get('text')
            });
            comment.save().then(function(comment) {
                post.get('comments').pushObject(comment);
            });
            this.get('target').transitionTo('post.index');
        }
    }
});
