const express = require("express");
const {createProxyMiddleware} = require("http-proxy-middleware");
const morgan = require("morgan");

const app = express()
app.use(morgan("dev"))

app.use("/characters", createProxyMiddleware({
	target:"http://localhost:3001",
	changeOrigin:true
}))

app.use("/films", createProxyMiddleware({
	target:"http://localhost:3002",
	changeOrigin:true
}))

app.use("/planets", createProxyMiddleware({
	target:"http://localhost:3003",
	changeOrigin:true
}))

app.listen(3000, ()=>{
	console.log("Gateway listening on port 3000");
})