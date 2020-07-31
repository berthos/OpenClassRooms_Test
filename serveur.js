var http = require('http');

const hostname = 'localhost';
const port = 8080;

var url = require("url");
var querystring = require('querystring');

var server = http.createServer(function(req,res) {
	var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);
	if ('monamour' in params) {
		console.log(`page demandé : ${page} avec les paramètres : ${params['monamour']}`);
	}
	
	res.writeHead(200,{"Content-Type": "text/html"});
    if (page == '/') {
		res.writeHead(200,{"Content-Type": "text/html"});
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
		res.writeHead(200,{"Content-Type": "text/html"});
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/etage/1/chambre') {
		res.writeHead(200,{"Content-Type": "text/html"});
        res.write('Hé ho, c\'est privé ici !');
    }
	else {
		res.writeHead(404,{"Content-Type": "text/html"});
		res.write(`Page non trouvée : ${page}`);
	}

    res.end();
});
server.listen(port,hostname,() => {
	console.log(`Le serveur est démarré sur le port http://${hostname}:${port}/`);
});