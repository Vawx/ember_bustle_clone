import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index-news-stories', 'Integration | Component | index news stories', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{index-news-stories}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#index-news-stories}}
      template block text
    {{/index-news-stories}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
