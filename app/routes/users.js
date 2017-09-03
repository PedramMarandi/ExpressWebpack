import express from 'express';
import mongoose from 'mongoose';
import call from './proxyClient';
import userController from '../controllers/user'

var router = require('express').Router();
/* GET users listing. */
router.get('/:username', call(userController.getUser, (req, res, next) => [req.params.username]));

router.post('/', call(userController.create, (req, res, next) => [req.body]));

module.exports = router;