import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      diputados: this.store.findAll('postulador-comision')
    });
  }
});
