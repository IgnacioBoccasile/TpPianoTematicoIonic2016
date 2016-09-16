var sonido = '';

angular.module('starter.controllers', ['ngCordova'])

.controller('AutorCtrl', function($scope, $cordovaNativeAudio) {
	
	$scope.ambiente = function()
	{
		$cordovaNativeAudio.loop('Ambiente');
	}
	
})

.controller('PianoCtrl', function($scope, $cordovaNativeAudio, $cordovaVibration) {
	
	$scope.liuKang = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('LiuKang');
		sonido = 'LiuKang';
	}
	
	$scope.kungLao = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('KungLao');
		sonido = 'KungLao';
	}
	
	$scope.johhnyCage = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('JohnnyCage');
		sonido = 'JohnnyCage';
	}
	
	$scope.reptile = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('Reptile');
		sonido = 'Reptile';
	}
	
	$scope.subZero = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('SubZero');
		sonido = 'SubZero';
	}
	
	$scope.shangTsung = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('ShangTsung');
		sonido = 'ShangTsung';
	}
	
	$scope.kitana = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('Kitana');
		sonido = 'Kitana';
	}
	
	$scope.jax = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('Jax');
		sonido = 'Jax';
	}
	
	$scope.mileena = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('Mileena');
		sonido = 'Mileena';
	}
	
	$scope.baraka = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('Baraka');
		sonido = 'Baraka';
	}
	
	$scope.scorpion = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('Scorpion');
		sonido = 'Scorpion';
	}
	
	$scope.raiden = function()
	{
		$cordovaNativeAudio.stop('sonido');
		$cordovaNativeAudio.play('Raiden');
		sonido = 'Raiden';
	}
	
});


