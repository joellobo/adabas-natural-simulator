var Database = function(){
	var name = null;
	var files = [];

	this.setName = function(newName){
		log('setting database name to ' + newName);
	 	this.name = newName;
	};

	this.getName = function(){
		return this.name;
	};    

	this.init = function(){
		log('init database ' + this.name);
	};

};
