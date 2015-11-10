var Database = function(){
	var name = null;
	var files = [];

	this.setName = function(newName){
		console.log('setting database name to ' + newName);
	 	this.name = newName;
	};

	this.getName = function(){
		return this.name;
	};    

	this.init = function(){
		console.log('init database ' + this.name);
	};

};
