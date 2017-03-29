import express from 'express';
import mongoose from 'mongoose';

var router = require('express').Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = mongoose.model('User').create({
    name: 'Pedram',
    lastName: 'Marandi',
    age: 22,
    password: '9338393Gapgoo'
  }, function(err, user) {
    if(err) console.log(err);
        res.render('index', { title: 'User pages' });
  }); 
});

module.exports = router;
