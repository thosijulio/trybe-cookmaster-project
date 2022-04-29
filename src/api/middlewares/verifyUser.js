const verifyUser = (req, res, next) => {
  const user = req.body;

  if (!user || !user.name || !user.password || !user.email) {
    return next({ message: 'Invalid entries. Try again.', status: 400 });
  }

  return next();
};

module.exports = verifyUser;
