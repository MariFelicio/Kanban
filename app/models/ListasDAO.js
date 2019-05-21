function ListasDAO(connection){
	this._connection = connection();
	
}

ListasDAO.prototype.inserirLista = function(lista){
	this._connection.open(function(err, mongoclient){
		mongoclient.collection("listas", function(err, collection){
			collection.insert(lista);

			mongoclient.close();
		});
	});  
}

module.exports = function(){
	return ListasDAO;
}