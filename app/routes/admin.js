import Ember from 'ember';

export default Ember.Route.extend({
  model( ) {
    return Ember.RSVP.hash({
      stories: this.store.findAll('story'),
      headlines: this.store.findAll('headline')
    });
  },
  actions: {
    save( params ) {
      var storyParams = {
        author: params.author,
        content: params.content,
        image_url: params.image_url,
        post_date: params.post_date,
        title: params.title,
      };
      if( params.headline ) {
          var newHeadline = this.store.createRecord("headline", storyParams);
          newHeadline.save( );
      }
      else {
        var newStory = this.store.createRecord("story", storyParams);
        newStory.save( );
      }
      this.transitionTo('index');
    },
    updateSave( params, id ) {
      if( params.headline ) {
        this.store.findRecord('headline', id).then(function( story ) {
          story.set('author', params.author);
          story.set('content', params.content);
          story.set('post_date', params.post_date);
          story.set('image_url', params.image_url);
          story.set('title', params.title);
          story.save( );
        });
      }
      else {
        this.store.findRecord('story', id).then(function( story ) {
          story.set('author', params.author);
          story.set('content', params.content);
          story.set('post_date', params.post_date);
          story.set('image_url', params.image_url);
          story.set('title', params.title);
          story.save( );
        });
      }
      this.transitionTo('admin');
    },
    destroyStory( story ) {
      story.destroyRecord( );
      this.transitionTo('admin');
    },
    destroyHeadline( headline ){
      headline.destroyRecord( );
      this.transitionTo('admin');
    },
  },
});
