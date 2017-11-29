angular.module('minhasDiretivas',[])
	.directive('meuPainel', function(){
		var ddo ={};

		ddo.restrict = "AE";

		ddo.transclude = true;

		ddo.scope = {
			titulo : '@'
		}

		ddo.templateUrl = 'js/directives/templates/meu-painel.html';

		return ddo;
	})
	.directive('minhaFoto', function(){
		var ddo = {};

		ddo.restrict = 'AE';

		ddo.transclude =true;

		ddo.scope ={
			titulo : '@',
			url : '@'
		}

		ddo.templateUrl = 'js/directives/templates/minha-foto.html';

		return ddo;

	})
	.directive('meuFocus', function(){
		var ddo ={};

		ddo.restric = "A";

		ddo.link = function(scope,element){
			scope.$on('FotoCadastrada', function(){
				element[0].focus();
			});
		};

		return ddo;
	});