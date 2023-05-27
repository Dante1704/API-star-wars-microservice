const express = require("express");

const {createProxyMiddleware} = require("http-proxy-middleware");



const server = express();

//IMPORTANTE ACA NO PONER EL BODY PARSER NI EL EXPRESS.JSON() PORQUE EL PROXY-MIDDLEWARE LO MANEJA
/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */


// ante una peticion a /characters quiero redirigir al puerto 3001 de la computadora characters
server.use("/characters", createProxyMiddleware({
	target:"http://localhost:3001", 
	changeOrigin:true
}))

server.use("/films", createProxyMiddleware({
	target:"http://localhost:3002",
	changeOrigin:true
}))

server.use("/planets", createProxyMiddleware({
	target:"http://localhost:3003",
	changeOrigin:true
}))

module.exports = server