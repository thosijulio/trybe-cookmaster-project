const express = require('express');
const create = require('./create');
const verfiyUser = require('../../middlewares/verifyUser');
const verifyEmail = require('../../middlewares/verifyEmail');
const createAdmin = require('./createAdmin');
const verifyAdminPermission = require('../../middlewares/verifyAdminPermission');

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/', verfiyUser, verifyEmail, create);
userRouter.post('/admin', verifyAdminPermission, createAdmin);

module.exports = userRouter;