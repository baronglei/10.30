var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var con = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database:'item'
})

/* GET home page. */
router.get('/index', function(req, res, next) {
	con.query('SELECT * FROM baobao',function(err,rows,abc){
		res.header("Access-Control-Allow-Origin","*")
		res.send(rows)
	})
});

router.post('/datail', function(req, res, next) {
	var abc = req.body.abc
	con.query('SELECT datail FROM baobao WHERE id=' + abc, function(err, rows, fields) {
		res.header('Access-Control-Allow-Origin', "*")
		res.send(rows)
	});
});






module.exports = router;