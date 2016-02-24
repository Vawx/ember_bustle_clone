import Ember from 'ember';

export default Ember.Component.extend({
  showSave : false,
  showSubmit : true,
  saveID: -1,
  saveType: "none",
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
    editStory( id ) {
      this.set("title", id.get("title"));
      this.set("author", id.get("author"));
      this.set("content", id.get("content"));
      this.set("img_url", id.get("image_url"));
      this.set("post_date", id.get("post_date"));
      this.set("headline", false);
      this.set('showSave', true);
      this.set('showSubmit', false);
      this.set('saveID', id.id);
      this.set('saveType', "story");
    },
    editHeadline( id ) {
      this.set("title", id.get("title"));
      this.set("author", id.get("author"));
      this.set("content", id.get("content"));
      this.set("img_url", id.get("image_url"));
      this.set("post_date", id.get("post_date"));
      this.set("headline", true);
      this.set('showSave', true);
      this.set('showSubmit', false);
      this.set('saveID', id.id);
      this.set('saveType', "headline");
    },
    destroyStory( story ) {
      this.sendAction('destroyStory', story);
    },
    destroyHeadline( headline ){
      this.sendAction('destroyHeadline', headline);
    },
    updateSave( ) {
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
              this.sendAction('updateSave', params, this.get("saveID"));
            }
          }
        }
        else {
          alert("All fields must be entered");
        }
        this.set('showSave', false);
        this.set('saveID', -1);
        this.set('saveType', "none");
        this.set('showSubmit', true);

        this.set("title", "");
        this.set("author", "");
        this.set("content", "");
        this.set("img_url", "");
        this.set("post_date", "");
        this.set("headline", false);
    }
  }
});
