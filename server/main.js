import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';

Meteor.startup(() => {
  // code to run on server at startup
  Router.route('/', function () {
  // render the Home template with a custom data context
  console.log('rendered home');
  this.render('content');
});
});
