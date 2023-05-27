const server = require("./src/v1/server");
const { swaggerDocs: V1SwaggerDocs } = require("./src/v1/swagger");

server.listen(3000, ()=>{
	console.log("Gateway listening on port 3000");
	V1SwaggerDocs(server, 3000);
})