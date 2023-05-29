const express = require("express");

const {createProxyMiddleware} = require("http-proxy-middleware");



const server = express();

//IMPORTANTE ACA NO PONER EL BODY PARSER NI EL EXPRESS.JSON() PORQUE EL PROXY-MIDDLEWARE LO MANEJA

/**
 * @openapi
 * components:
 *   schemas:
 *     Characters:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *           example: 1
 *         name: 
 *           type: string
 *           example: Luke Skywalker  
 *         height:
 *           type: string
 *           example: 172
 *         mass:
 *           type: string
 *           example: 77
 *         hair_color:
 *           type: string
 *           example: blond
 *         skin_color:
 *           type: string
 *           example: fair
 *         eye_color:
 *           type: string
 *           example: blue
 *         birth_year:
 *           type: string
 *           example: 19BBY
 *         gender:
 *           type: string
 *           example: male
 *         homeworld:
 *           type: string
 *           example: 1
 *         films:
 *           type: array
 *           items:
 *             type: string
 *           example: ["1", "2", "3", "6"]
 */





/**
 * @openapi
 * /characters:
 *   get:
 *     tags:
 *       - Star Wars Characters
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Characters"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string 
 *                   example: some error message
 /characters/{id}:
 *   get:
 *     tags:
 *       - Star Wars Character by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the character asked
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Characters"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string 
 *                   example: some error message
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