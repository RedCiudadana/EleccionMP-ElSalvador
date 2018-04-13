import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = EmberRouter.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('perfil', {path: '/perfil/:id'}, function() {
    this.route('frente-a-frente');
    this.route('propuestas');
    this.route('fact-checking');
  });

  this.route('perfiles');

  this.route('comision', function() {
    this.route('diputado', { path: '/:id' }, function() {
      this.route('frente-a-frente');
      this.route('fact-checking');
    });
  });

  this.route('investigacion');

  this.route('metodologia');
  this.route('tabla-gradacion');
});

export default Router;
