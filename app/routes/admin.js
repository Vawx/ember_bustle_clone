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
      console.log( params.author );
      console.log( params.content );
      console.log( params.image_url );
      console.log( params.post_date );
      console.log( params.title );

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
    destroyStory( story ) {
      story.destroyRecord( );
      this.transitionTo('admin');
    },
    destroyHeadline( headline ){
      headline.destroyRecord( );
      this.transitionTo('admin');
    },
  }
});
