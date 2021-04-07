const { Router } = require('express');
const app = require('../app.js');
const Fungi = require('../models/Fungi.js');

module.exports = Router()
.post('/', async(req,res,next) => {
    try{
        const fungus = await Fungi.insert(req.body);
        res.send(fungus);
    } catch(err) {
        next(err);
    }
})
.get('/', async(req, res, next) => {
    try {
      const order = await OrderService.getAll();
      res.send(order);
    } catch(error) {
      next(error);
    }
})
