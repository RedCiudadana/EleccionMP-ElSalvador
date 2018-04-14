import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('front-porfolio-visualization', 'Integration | Component | front porfolio visualization', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{front-porfolio-visualization}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#front-porfolio-visualization}}
      template block text
    {{/front-porfolio-visualization}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
