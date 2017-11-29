angular.module('alurapic').controller('FotoController', function($scope,recursoFoto,$routeParams,recursoCadastraFoto){
	$scope.foto = {};
	$scope.mensagem = '';

	

	if($routeParams.fotoId){
		recursoFoto.get({fotoId:$routeParams.fotoId}, function(result){
			$scope.foto = result;
		}, function(err){
			console.log(err);
			$scope.mensagem = 'Não foi possível carregar a imagem.';
		});
	}



	$scope.submeter = function(){
		if($scope.formulario.$valid){
			recursoCadastraFoto.cadastrar($scope.foto)
				.then(function(results){
					$scope.mensagem =results.mensagem;
					if(results.inclusao){
						$scope.foto ={};
						$scope.formulario.$setPristine();
				}
				}).catch(function(err){
					console.log(err);
					$scope.mensagem = err.mensagem;
				});





			/*
			if($routeParams.fotoId){

				recursoFoto.update({fotoId:$routeParams.fotoId},$scope.foto, function(){
					$scope.mensagem = $scope.mensagem = 'Foto alterada com sucesso';
				}, function(err){
					console.log(err);
					$scope.mensagem = "Erro ao alterar a foto";
				});
			}
			else{


				recursoFoto.save($scope.foto, function(){
					$scope.foto = {};
					$scope.formulario.$setPristine();
					$scope.mensagem = 'Foto cadastrada com sucesso';
				}, function(){
					console.log(err);
					$scope.mensagem = 'Erro ao cadastrar a foto';
				});
			}*/

		}

	};


});