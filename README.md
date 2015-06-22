Ember Rails Blog
================

A simple blog app which uses an [Ember JS CLI based app](https://github.com/ianwdunlop/ember-cli-blog) to handle the MVC and Ruby on Rails to persist the models and serve JSON to the front end. Uses [EmberCLI Rails](https://github.com/rwz/ember-cli-rails) to handle the asset management parts of the Ember app. The app has the usual post model which has many comments and is just a tiny demonstrator of the technology. It uses Rails 4.2. It's a work in progress. Feel free to fix parts if you are feeling charitable.

# Getting started.
Make sure the Ruby gems are installed with a 'bundle install'. Then we need to install the ember dependencies using npm and bower. Enter the `cliblog` directory and do a `npm install` and then a `bower install`. Go back to the rails root, do a `rake db:create` and `rake db:migrate`. Start the app with 'rails s'.

# Licence
Available under the MIT licence. See licence.txt for details.
