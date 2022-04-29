const model = require('../../models');

const findByEmail = async (email) => model.userModel.findByEmail(email);

module.exports = findByEmail;
