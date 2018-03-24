import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  spreadsheets: Ember.inject.service(),
  _routing: Ember.inject.service('-routing'),

  model(params) {
    const spreadsheet = this.get('spreadsheets');
    const _routing = this.get('_routing');
    const perfil = this.store.peekRecord('perfil', params.id);
    const institucion = perfil.get('institucion');
    const partidoActual = perfil.get('partidoActual');

    return Ember.RSVP.hash({
      config: {},
      perfil: perfil,
      institucion: institucion,
      partidoActual: partidoActual,
      perfilInformacionGeneralConfiguracion: spreadsheet
        .fetch('perfil-informacion-general-configuracion', 'config'),
      perfiles: this.modelFor('application').perfiles,
      documentosDisponibles: spreadsheet
        .fetch('documentos-disponibles')
        .then((documentos) => {
          return Ember.A(documentos)
            .filterBy('perfil', perfil.get('id'));
        }),
      datosTablaGradacion: spreadsheet
        .fetch('tabla-gradacion')
        .then((registros) => {
          return Ember.A(registros)
            .filterBy('perfil', perfil.get('id'))
            .filter((e) => e.aspecto !== 'Total');
        }),
      totalPuntajeGradacion: spreadsheet
        .fetch('tabla-gradacion')
        .then((registros) => {
          return Ember.A(registros)
            .filterBy('perfil', perfil.get('id'))
            .filter((e) => e.aspecto !== 'Total' && e.aspecto !== 'Cualidades Éticas y de Probidad')
            .reduce((previousValue, item) => previousValue + parseInt(item.puntaje), 0);
        }),
      perfilFuncionalidades: spreadsheet
        .fetch('perfil-funcionalidades', 'config')
        .then((links) => {
          return Ember.A(links)
            .filter((link) => {
              if (link.link) {
                return true;
              }

              if (!_routing.hasRoute(link.route)) {
                throw new Error(`Route not recognized: ${link.route}`);
              }

              return true;
            });
        }),
      tachas: spreadsheet
        .fetch('tachas')
        .then((registros) => {
          return Ember.A(registros)
            .filterBy('perfilId', perfil.get('id'));
        })
    });
  },

  afterModel(model) {
    if (!Ember.isNone(model.perfil.get('nombre'))) {
      this.set('breadCrumb', {
        title: model.perfil.get('nombre')
      });
    }
  },

  setupController(controller, model) {
    this._super(controller, model);

    model.config.perfilFuncionalidades = model.perfilFuncionalidades;

    controller.setProperties({
      disqusShortname: config.disqus.shortname,
      applicationConfig: this.modelFor('application').config
    });
  },

  actions: {
    didTransition() {
      window.scrollTo(0, 0);
    }
  }
});
