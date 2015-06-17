import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
       comments: DS.hasMany('comment', { async: true } )
});
