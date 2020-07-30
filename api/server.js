const express = require("express");

const CarsRouter = require('../cars/cars-Router');

const server = express();

server.use(express.json());

server.use('/api/cars', CarsRouter)

module.exports = server;
