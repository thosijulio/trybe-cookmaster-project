const express = require('express');
const userRouter = require('./user');
const recipeRouter = require('./recipe');
const login = require('./login');
const verifyLogin = require('../middlewares/verifyLogin');
const findImage = require('./recipe/findImage');

const mainRouter = express.Router({ mergeParams: true });

mainRouter.use('/users', userRouter);
mainRouter.use('/recipes', recipeRouter);
mainRouter.use('/login', verifyLogin, login);
mainRouter.get('/images/:id', findImage);

module.exports = mainRouter;
