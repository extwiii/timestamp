var express = require('express');
var app = express();
var path = require('path');

var reguni = /^\d{13}$/;
var regnat = /^(?:(?:31(\/|-|\.|\s)(?:0?[13578]|1[02]|(?:January|March|May|July|August|October|December)))\1|(?:(?:29|30)(\/|-|\.|\s)(?:0?[1,3-9]|1[0-2]|(?:January|March|April|May|June|July|August|September|October|November|December))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.|\s)(?:0?2|(?:February))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.|\s)(?:(?:0?[1-9]|(?:January|February|March|April|May|June|July|August|September))|(?:1[0-2]|(?:October|November|December)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
var split = /(\/|-|\.|\s)/;
var monthreg = /(January|February|March|April|May|June|July|August|September|October|November|December)/;
var result;


function parseunix(time) {  
		var d = new Date();
		d.setTime(time);

		var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    	var month  = months[d.getUTCMonth()];
		var day = d.getUTCDate();
		var year = d.getUTCFullYear();

		var newDate = month + " " + day + ", " + year;

       return {  
         unix: time,  
         natural: newDate 
       }  
  } 

function parsenat(time) { 
		var temp = time.split(split); 
		var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    	if(monthreg.test(temp[2])){
    		var month = temp[2];
    	}else{
    		var month  = months[temp[2]];}
		var day = temp[0];
		var year = temp[4];

		var newDate = month + " " + day + ", " + year;
       return {  
         unix: parseInt(new Date(time).getTime()),  
         natural: newDate  
       }  
  } 

app.get('/:time', function (req, res) {
	
	var time = req.params.time;

	if(reguni.test(time)){
		result = parseunix(time);
	}

	else if(regnat.test(time)){
		result = parsenat(time);
		
	}else {
		result = "invalid form, please try again you should use either 13 digits numbers or dd mm yyyy format";
	}
	res.send(result);	

});

app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname + '/index.html'));
});

var port = process.env.PORT || 3000; 

app.listen(port, function () {
  console.log('Node.js listening on port ' + port);
});



