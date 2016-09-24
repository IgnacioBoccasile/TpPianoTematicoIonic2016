angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
	if (window.plugins && window.plugins.NativeAudio) {
		window.plugins.NativeAudio.preloadComplex('Ambiente', 'audio/Ambiente.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadSimple('LiuKang', 'audio/LiuKang.mp3');
		window.plugins.NativeAudio.preloadSimple('KungLao', 'audio/KungLao.mp3');
		window.plugins.NativeAudio.preloadSimple('JohnnyCage', 'audio/JohnnyCage.mp3');
		window.plugins.NativeAudio.preloadSimple('Reptile', 'audio/Reptile.mp3');
		window.plugins.NativeAudio.preloadSimple('SubZero', 'audio/SubZero.mp3');
		window.plugins.NativeAudio.preloadSimple('ShangTsung', 'audio/ShangTsung.mp3');
		window.plugins.NativeAudio.preloadSimple('Kitana', 'audio/Kitana.mp3');
		window.plugins.NativeAudio.preloadSimple('Jax', 'audio/Jax.mp3');
		window.plugins.NativeAudio.preloadSimple('Mileena', 'audio/Mileena.mp3');
		window.plugins.NativeAudio.preloadSimple('Baraka', 'audio/Baraka.mp3');
		window.plugins.NativeAudio.preloadSimple('Scorpion', 'audio/Scorpion.mp3');
		window.plugins.NativeAudio.preloadSimple('Raiden', 'audio/Raiden.mp3');
		window.plugins.NativeAudio.preloadSimple('Guardar', 'audio/Guardar.mp3');
	}
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.autor', {
    url: '/autor',
    views: {
      'tab-autor': {
        templateUrl: 'templates/tab-autor.html',
        controller: 'AutorCtrl'
      }
    }
  })
  
  .state('tab.piano', {
    url: '/piano',
    views: {
      'tab-piano': {
        templateUrl: 'templates/tab-piano.html',
        controller: 'PianoCtrl'
      }
    }
  })

    .state('tab.inicio', {
    url: '/inicio',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/tab-inicio.html',
        controller: 'InicioCtrl'
      }
    }
  });
  
  $urlRouterProvider.otherwise('/tab/inicio');

});
