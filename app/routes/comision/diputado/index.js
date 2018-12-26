import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: null,

  setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties(model);
  }
});
