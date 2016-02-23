import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr( ),
  content: DS.attr( ),
  image_url: DS.attr( ),
  post_date: DS.attr( ),
  title: DS.attr( ),
});
 
