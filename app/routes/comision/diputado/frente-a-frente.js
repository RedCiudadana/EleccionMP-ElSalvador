import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: null,

  model() {
    return this.modelFor('comision.diputado');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('perfilUnoId', model.postulador.get('id'));

    controller.set(
      'frenteAFrenteFuncionalidad',
      Ember.A(model.postuladorFuncionalidades)
        .findBy('route', 'comision.diputado.frente-a-frente')
    );

    let frenteAFrenteFields = this.store
      .serializerFor('postulador-comision')
      .get('frenteAFrenteFields');

    controller.set('frenteAFrenteFields', frenteAFrenteFields);
  },

  actions: {
  }
});
