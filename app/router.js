import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('story-page', {path: '/story/:story_id'});
  this.route('headline-page', {path: '/headline/:headline_id'});
  this.route('admin');
});

export default Router;
