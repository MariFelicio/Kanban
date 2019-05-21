module.exports.index = function (application, req, res){
	res.render('index', {validacao: {}, dadosForm: {} });
}

module.exports.cadastrar = function (application, req, res){

	var dadosForm = req.body;

	
	req.assert('usuario', 'Usuario não pode ser vazio').notEmpty();
	req.assert('senha', 'Senha não pode ser vazio').notEmpty();
	

	var erros = req.validationErrors();

	if(erros){
		res.render('index', {validacao: erros, dadosForm});
		return;
	}

	var connection = application.config.dbConnection;

	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.inserirUsuario(dadosForm);

	res.send('podemos cadastrar');

}
