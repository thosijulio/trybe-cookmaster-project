const jwt = require('jsonwebtoken');
const service = require('../../services');

const API_SECRET = 'password';
const JWT_CONFIG = {
  expiresIn: '4h',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  const data = req.body;

  const { password, ...userWithoutPassword } = await service.userService.findByEmail(data.email);

  const token = jwt.sign({ data: userWithoutPassword }, API_SECRET, JWT_CONFIG);

  res.status(200).json({ token });
};

module.exports = login;