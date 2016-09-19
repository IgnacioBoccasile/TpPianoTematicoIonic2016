angular.module('starter.controllers', ['ngCordova'])

.controller('AutorCtrl', function($scope) {})

.controller('PianoCtrl', function($scope, $cordovaNativeAudio, $cordovaVibration) {
	
	$scope.liuKang = function()
	{
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('LiuKang');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
	
	$scope.kungLao = function()
	{	
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('KungLao');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
	
	$scope.johhnyCage = function()
	{	
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('JohnnyCage');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
	
	$scope.reptile = function()
	{	
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('Reptile');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
	
	$scope.subZero = function()
	{		
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('SubZero');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
	
	$scope.shangTsung = function()
	{		
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('ShangTsung');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
	
	$scope.kitana = function()
	{	
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('Kitana');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
	
	$scope.jax = function()
	{	
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('Jax');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
	
	$scope.mileena = function()
	{		
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('Mileena');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
	
	$scope.baraka = function()
	{		
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('Baraka');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
	
	$scope.scorpion = function()
	{	
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('Scorpion');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
	
	$scope.raiden = function()
	{	
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('Raiden');
		}

		catch(Exception)
		{
			console.log(Exception.Message);
		}	
	}
})

.controller('InicioCtrl', function($scope, $ionicPlatform, $cordovaNativeAudio, $cordovaVibration){

	$scope.bandera = false;
	
	$scope.MisMensajes=[];
	
	var messagesRef = new Firebase('https://tppiano-fd160.firebaseio.com/Usuarios');
	
	$ionicPlatform.ready(function(){
		
		try
		{
			$cordovaNativeAudio.loop('Ambiente');
		}
		
		catch(Exception)
		{
			console.log(Exception.Message);
		}
		
	});	
	
	$scope.miBoton = function()
	{
		try
		{
			$cordovaVibration.vibrate(30);
			$cordovaNativeAudio.play('Comenzar');
		}
		
		catch(Exception)
		{
			console.log(Exception.Message);
		}
		
		$scope.bandera = true;
		
		var nombre = $('#nombre').val();
		messagesRef.push({usuario:nombre});
	}
	
	messagesRef.on('child_added', function (snapshot) 
	{
		$timeout(function()
		{
			var message = snapshot.val();
			$scope.MisMensajes.push(message);
			console.log($scope.MisMensajes);
		});
	});		
});
