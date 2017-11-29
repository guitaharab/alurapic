angular.module('meusServicos',['ngResource'])
	.factory('recursoFoto', function($resource){

		return $resource('/v1/fotos/:fotoId', null,{
			'update' : {
				method : 'PUT'
			}
		});
	})
	.factory('recursoCadastraFoto', function(recursoFoto, $q,$rootScope){
		var servico = {};
		var evento = 'FotoCadastrada';

		servico.cadastrar =function(foto){
			return $q(function(resolve, reject){
				if(foto._id){

					recursoFoto.update({fotoId:foto._id},foto, function(){
						$rootScope.$broadcast(evento);
						resolve({
								mensagem : 'Foto alterada com sucesso'
						});
						}, function(err){
							rejetc({
								mensagem : "Erro ao alterar a foto"
							});

					});
				}
				else{
					recursoFoto.save(foto, function(){
						$rootScope.$broadcast(evento);
						resolve({
							mensagem : 'Foto cadastrada com sucesso',
							inclusao : true
						});
						
					}, function(){
						reject({
							mensagem : 'Erro ao cadastrar a foto'
						});
					});
				}
			});
		};
		return servico;
	});