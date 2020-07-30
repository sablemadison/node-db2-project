const express = require('express');

const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

const router = express.Router();

//Create

router.post('/', (req, res) => {
const carData = req.body;
    db('cars')
    .insert(carData)
    .then((id)=> res.status(201).json({data: id}))
    .catch((err)=> console.log(err))

})

//Read

router.get('/', (req, res) => {
    db.select('*')
    .from('cars')
    .then((cars)=> res.status(200).json({data: cars}))
    .catch((err)=> { console.log(err)})
    })

    module.exports = router;