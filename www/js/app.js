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
		window.plugins.NativeAudio.preloadComplex('Ambiente', 'audio/Ambiente.mp3', 0.3, 1);
		window.plugins.NativeAudio.preloadComplex('LiuKang', 'audio/LiuKang.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadComplex('KungLao', 'audio/KungLao.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadComplex('JohnnyCage', 'audio/JohnnyCage.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadComplex('Reptile', 'audio/Reptile.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadComplex('SubZero', 'audio/SubZero.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadComplex('ShangTsung', 'audio/ShangTsung.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadComplex('Kitana', 'audio/Kitana.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadComplex('Jax', 'audio/Jax.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadComplex('Mileena', 'audio/Mileena.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadComplex('Baraka', 'audio/Baraka.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadComplex('Scorpion', 'audio/Scorpion.mp3', 0.5, 1);
		window.plugins.NativeAudio.preloadComplex('Raiden', 'audio/Raiden.mp3', 0.5, 1);
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
  });
  
  $urlRouterProvider.otherwise('/tab/piano');

});
