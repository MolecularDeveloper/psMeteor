import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';
import '../lib/router';
import '../imports/api/posts.js';

Meteor.startup(() => {
  console.log('running in server/main.js');
});
