angular.module('alurapic').controller('FotosController', function($scope,$http,recursoFoto){
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';


	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	},function(err){
		console.log(err);
	});



	$scope.remover = function(foto){

		recursoFoto.delete({fotoId:foto._id}, function(){
				var index = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(index,1);
            	$scope.mensagem = 'Foto removida com sucesso!';			
		},function(err) {
           		 console.log(err);
           		 $scope.mensagem = 'Não foi possível apagar a foto ';
        }); 

  	};

});
