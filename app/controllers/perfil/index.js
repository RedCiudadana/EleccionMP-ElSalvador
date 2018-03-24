import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  tachasLength: computed('model.tachas.[]', function() {
    // return 'sup';
    return this.get('model.tachas').length;
  })
});
