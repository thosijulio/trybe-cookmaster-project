const userService = require('../../services/user');

const createAdmin = async (req, res) => {
  const user = req.body;
  const result = await userService.create({ ...user, role: 'admin' });
  res.status(201).json({ user: result });
};

module.exports = createAdmin;
