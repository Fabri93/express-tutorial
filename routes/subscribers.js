const express = require('express')
const router = express.Router()

//Get all
router.get('/', (req,res) => {
    res.send("Hello world")
})
//Get one
router.get('/:id', (req,res) => {
    res.send(req.params.id)
})
//Create one
router.get('/', (req,res) => {
    
})
//Update one
router.patch('/:id', (req,res) => {
    
})
//Delete one
router.delete('/:id', (req,res) => {
    
})

module.exports = router