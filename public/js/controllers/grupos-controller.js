angular.module('alurapic').controller('GruposController',function($scope,$http){
	$scope.grupos = [];

	$http.get('/v1/grupos')
	.success(function(result){
		$scope.grupos = result;
	})
	.error(function(err){
		console.log(err);
	});
});