import Component from '@ember/component';

export default Component.extend({
  onDidInsert: null,

  didInsertElement() {
    this.get('onDidInsertElement')();
  }
});
