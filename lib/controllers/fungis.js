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
      const fungi = await Fungi.getAll();
      res.send(fungi);
    } catch(error) {
      next(error);
    }
})
.get('/:id', async(req,res,next) => {
  try {
    const fungi = await Fungi.getById(req.params.id);
    res.send(fungi); 
  } catch (error) {
   next(error);
  }
})
.put('/:id', async(req,res,next) => {
  try {
    const fungi = await Fungi.update(req.params.id, req.body);
    console.log(req.body, 'hgiusdfhgiuh');
    res.send(fungi);
  } catch (error) {
    next(error)
  }
})
.delete('/:id', async(req,res,next) => {
  try {
    const fungi = await Fungi.delete(req.params.id);
    res.send(fungi);
  } catch (error) {
    next(error)
  }
})

