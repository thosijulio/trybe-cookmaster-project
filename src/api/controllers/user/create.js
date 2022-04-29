const service = require('../../services');

const create = async (req, res) => {
  const user = req.body;
  const result = await service.userService.create({ ...user, role: 'user' });

  res.status(201).json({ user: result });
};

module.exports = create;
