var express = require ('express');
var router = express.Router();
var mongoose = require ('mongoose');


/*var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json());
var corsOption = {
	origin: "http://localhost:4200",
	optionSuccessStatus: 200
}

app.use(cors(corsOption));
*/
mongoose.connect("mongodb://localhost:27017/student", {useNewUrlParser: true });
var mySchema = mongoose.Schema({
	name: String,
	email: String,
	password: String
});

var ChoiceModel = mongoose.model('choices', mySchema);

var database = [];

app.listen(3000, () =>{
	console.log('Server started');
});

router.get('/ilike/:icecreamchoice/:name', function( req, res){

	if (req.body.formfactor) {
		console.log(req.body.formfactor);
	} else {
		console.log('No formfactor');
	}

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
