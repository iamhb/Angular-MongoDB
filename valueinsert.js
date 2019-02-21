var express = require ('express');
var app = express();
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json());
var corsOption = {
	origin: "http://localhost:4200",
	optionSuccessStatus: 200
}

app.use(cors(corsOption));

mongoose.connect("mongodb://localhost:27017/student", {useNewUrlParser: true });
var mySchema = mongoose.Schema({
	name: String,
	icecreamchoice: String
}); 

var ChoiceModel = mongoose.model('democollections', mySchema);

var database = [];

app.listen(3000, () =>{
	console.log('Server started');
});

app.get('/ilike/:icecreamchoice/:name', function( req, res){

	var choice = req.params.icecreamchoice;
	var name = req.params.name;
	var newChoice = new ChoiceModel();

	newChoice.icecreamchoice = choice;
	newChoice.name = name;
	newChoice.save(function(err, savedObject){
		if (err) {
			console.log(err);
			res.status(500).send(); 
		}
		else{
			res.send(savedObject);
		}
	});
});
 
var idvar=0 ;

 app.get('/likes', function(req,res){
	
		ChoiceModel.find({},{ name:1, _id:1 },function(err, foundData){
			//https://stackoverflow.com/questions/25589113/how-to-select-a-single-field-in-mongodb
			//var responseObject = foundData;
			//responseObject = {count: foundData.length};
 			//res.send(foundData); 
 			res.render('index.jade', { foundData: foundData});
 			//or res.json(foundData);
 			//res.send(foundData + responseObject);
 			//res.send(responseObject);
 			//console.log(foundData);
 });
	});