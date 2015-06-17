import DS from 'ember-data';

export
default DS.RESTAdapter.extend({
    namespace: '',
    headers: {
        "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
    }
});
