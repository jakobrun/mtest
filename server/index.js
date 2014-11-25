'use strict';
var express = require('express'),
	app = express();

console.log(__dirname + '/../app/');
app.use(express.static(__dirname + '/../app'));

var data = [
	{nafn: 'Anne', heimili: 'Bananastreet 5'},
	{nafn: 'John', heimili: 'Wonderland 27'},
	{nafn: 'Bill', heimili: 'Sesamestreet 14'},
	{nafn: 'Sed', heimili: 'Dreamland 7'},
	{nafn: 'Rose', heimili: 'Dreamland 9'}
];

app.get('/search', function  (req, res) {
	var q = req.param('q');
	if(!q) {
		res.json([]);
	} else {
		q = q.toLowerCase();
		res.json(data.filter(function (p) {
			return p.nafn.toLowerCase().indexOf(q) !== -1 || p.heimili.toLowerCase().indexOf(q) !== -1;
		}));		
	}
});

app.listen(3000, function () {
	console.log('server runing on port 3000');
});