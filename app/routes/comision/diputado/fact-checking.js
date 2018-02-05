import Ember from 'ember';

export default Ember.Route.extend({
  // TODO: Ver cómo hacer funcionar esta onda otra vez
  breadCrumb: null,

  spreadsheets: Ember.inject.service(),

  model() {
    const spreadsheet = this.get('spreadsheets');

    let postuladorConfigObject = this.modelFor('comision.diputado');

    return Ember.RSVP.hash({
      postuladorConfigObject: postuladorConfigObject,
      factCheckingGroupedItemsList: spreadsheet.fetch('postulador-fact-checking-data')
        // Filtrar por postulador
        .then((factCheckingData) => {
          return Ember.A(factCheckingData).filter((data) => {
            return data.postulador === postuladorConfigObject.postulador.get('id');
          });
        })

        // Agrupar por sección
        .then((factCheckingData) => {
          let groupedData = {};

          Ember.A(factCheckingData).forEach((item, index) => {
            if (Ember.isNone(groupedData[item.section])) {
              groupedData[item.section] = {};
            }

            groupedData[item.section][index] = {
              title: item.title,
              quote: item.quote,
              quoteUrl: item.quoteUrl,
              fact: item.fact,
              source: item.source,
              sourceUrl: item.sourceUrl
            };
          });

          return groupedData;
        }),
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set(
      'factCheckingFuncionalidad',
      Ember.A(model.postuladorFuncionalidades)
        .findBy('route', 'comision.diputado.fact-checking')
    );

    controller.set(
      'factCheckingGroupedItemsList',
      model.factCheckingGroupedItemsList
    );

    controller.set('postulador', model.postuladorConfigObject.postulador);
  },

  actions: {
  }
});
