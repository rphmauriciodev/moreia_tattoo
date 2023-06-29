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
moreia.get('/sobreNos', function(req,res){
    res.render('sobreNos');
})
moreia.get('/login', function(req,res){
    res.render('login');
})
moreia.get('/cadastro', function(req,res){
    res.render('cadastro');
})
moreia.get('/dados', function(req,res){
    res.render('dados',{lista});
})
moreia.post('/dados', function(req,res){
    nome = req.body.nome
    user = req.body.user
    senha = req.body.senha
    email = req.body.email
    telefone = req.body.telefone

    console.log(nome);
    console.log(user);
    console.log(senha);
    console.log(email);
    console.log(telefone);

    pessoa = {
        "nome":nome,
        "user":user,
        "senha":senha,
        "email":email,
        "telefone":telefone,
    }
    lista.push(pessoa);

    res.render('dados',{lista})
})

moreia.post('/', function(req,res){
    login = req.body.userLog;
    senha = req.body.senhaLog;

    if(login == "user" && senha == "1234"){
        res.render('logado');
    }else{
        res.render('erro');
    }
})

moreia.use(express.static('public'));

moreia.listen(3000);
console.log("Servidor funcionando na porta http://localhost:3000");