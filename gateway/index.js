const express = require("express");
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express()
//IMPORTANTE ACA NO PONER EL BODY PARSER NI EL EXPRESS.JSON() PORQUE EL PROXY-MIDDLEWARE LO MANEJA

// ante una peticion a /characters quiero redirigir al puerto 3001 de la computadora characters
app.use("/characters", createProxyMiddleware({
	target:"http://characters:3001", 
	changeOrigin:true
}))

app.use("/films", createProxyMiddleware({
	target:"http://films:3002",
	changeOrigin:true
}))

app.use("/planets", createProxyMiddleware({
	target:"http://planets:3003",
	changeOrigin:true
}))

app.listen(3000, ()=>{
	console.log("Gateway listening on port 3000");
})