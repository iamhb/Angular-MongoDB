const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');

app.use(bodyParser.json());

var corsOption = {
	origin: "http://localhost:4200",
	optionSuccessStatus: 200
}

app.use(corsOption);

const demoCollection = mongoose.model ('demoCollection', { name: String , email: String , password: String }) ;
mongoose.connect("mongodb://localhost:27017/student", {useNewUrlParser: true });

app.listen(3000, () =>{
	console.log('Server started');
});

app.get('/', (req, res) => {
	res.send("bingoo");
	console.log("bingoo");
});

app.get('/hello', (req, res) => {
	res.send("hello");
	console.log("hello");
});

/*app.get('/apicall', (req, res) => {
	console.log("apicall")
	var ourKitty = new cat();
	ourKitty.name = 'Black cat';
	ourKitty.save((err)=>
	{
		res.send(ourKitty);
	});
	res.send("apicall");
});
*/


/*app.all('/apivalue', (req, res) => {
	console.log('Inside app-all');
	console.log(req.body);
	console.log(req.method);
});
*/
/*app.use('/apivalue', (req, res) => {
	console.log('Inside app.use()');
	console.log('Value:', req.body);
	console.log('Request type:',req.method);
});
*/

app.use('/apivalue', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');
  //console.log('Inside app.use()');
  //console.log(req.body);
  next();
});

app.post('/apivalue',function (req, res) {
	console.log('Inside app.post()');
	//console.log(req);
    console.log('Request type:', req.method);
    console.log(req.body);

    var dbObject = new demoCollection();
	dbObject.name = req.body.userName;
	dbObject.email = req.body.email;
	dbObject.password = req.body.password;
	
	dbObject.save((err)=>
	{
		res.send(dbObject);
		console.log("---Added to DB---")
	});
  
});
