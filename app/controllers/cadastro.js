module.exports.cadastro = function (application, req, res){
	res.render('cadastro', {validacao: {}, dadosForm: {} });
}

module.exports.cadastrarLista = function (application, req, res){

	var dadosForm = req.body;

	
	req.assert('status', 'Status não pode ser vazio').notEmpty();
	req.assert('tarefa', 'Terefa não pode ser vazio').notEmpty();
	req.assert('descricao', 'Descrição não pode ser vazio').notEmpty();
	

	var erros = req.validationErrors();

	if(erros){
		res.render('cadastro', {validacao: erros, dadosForm});
		return;
	}

	var connection = application.config.dbConnection;

	var ListasDAO = new application.app.models.ListasDAO(connection);

	ListasDAO.inserirLista(dadosForm);

	res.send('podemos cadastrar');

}
