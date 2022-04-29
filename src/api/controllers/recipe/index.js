const express = require('express');
const verifyAuthUser = require('../../middlewares/verifyAuthUser');
const verifyRecipe = require('../../middlewares/verifyRecipe');
const find = require('./find');
const create = require('./create');
const findById = require('./findById');
const update = require('./update');
const verifyToken = require('../../middlewares/verifyToken');
const verifyPermission = require('../../middlewares/verifyPermission');
const remove = require('./remove');
const multer = require('../../middlewares/multer');
const createImage = require('./createImage');

const recipeRouter = express.Router({ mergeParams: true });

recipeRouter.post('/', verifyAuthUser, verifyRecipe, create);

recipeRouter.get('/', find);

recipeRouter.get('/:id', findById);

recipeRouter.put('/:id', verifyToken, verifyAuthUser, verifyPermission, update);

recipeRouter.delete('/:id', verifyToken, verifyAuthUser, verifyPermission, remove);

recipeRouter.put(
  '/:id/image',
  verifyToken,
  verifyAuthUser,
  verifyPermission,
  multer.single('image'),
  createImage,
);

module.exports = recipeRouter;
