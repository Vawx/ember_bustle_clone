import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save( ) {
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        content: this.get("content"),
        image_url: this.get("img_url"),
        post_date: this.get("post_date"),
        headline: this.get("headline"),
      };

      if(params.title != undefined &&
        params.author != undefined &&
        params.content != undefined &&
        params.image_url != undefined &&
        params.post_date != undefined  )
        {
          if(params.title.length > 0 &&
          params.author.length > 0 &&
          params.content.length > 0 &&
          params.image_url.length > 0 &&
          params.post_date.length > 0 ) {
            if( params.image_url.startsWith("http:") ){
              this.sendAction('save', params);
            }
          }
        }
        else {
          alert("All fields must be entered");
        }
    },
    destroyStory( story ) {
      this.sendAction('destroyStory', story);
    },
    destroyHeadline( headline ){
      this.sendAction('destroyHeadline', headline);
    }
  }
});
