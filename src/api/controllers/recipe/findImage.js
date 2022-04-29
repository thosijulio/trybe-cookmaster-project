const findImage = async (req, res) => {
  const { id } = req.params;
  res.sendFile(`${__dirname.split('/', 8).join('/')}/uploads/${id}.jpeg`);
};

module.exports = findImage;
