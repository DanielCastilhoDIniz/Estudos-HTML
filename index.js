const{createServer} = require("http");

let server = createServer((request,response) => {
    response.writeHead(200, {"Contente-Type": "text/html1" });
    response.write('<h1> Hellol World</h1> <p>Projeto Backend</p>');
    response.end();
})
server.listen(3000);
console.log("Projeto Iniciado!");