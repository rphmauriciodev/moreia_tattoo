var express = require('express');
var {engine} = require('express-handlebars');
var bp = require('body-parser');
const { urlencoded } = require('body-parser');
// var mysql = require('mysql2');
var lista = [];

var moreia = express();

// Banco de dados
// var mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'moreia'
//     });


moreia.engine('handlebars', engine());
moreia.set('view engine', 'handlebars');
moreia.set('views', './views');
moreia.use(bp.urlencoded({ extended: false }));
moreia.use(bp.json())

moreia.get('/', function(req,res){
    res.render('inicio');
})
moreia.get('/galeria', function(req,res){
    res.render('galeria');
})
moreia.get('/sobreNos', function(req,res){
    res.render('sobreNos');
})
moreia.use(express.static('public'));

moreia.listen(3000);
console.log("Servidor funcionando na porta http://localhost:3000");