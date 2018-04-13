import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
  sortingDefinition: ['resultadosEvaluacionInt:desc'],

  sortedPerfiles: Ember.computed.sort('model.perfiles', 'sortingDefinition')
});
