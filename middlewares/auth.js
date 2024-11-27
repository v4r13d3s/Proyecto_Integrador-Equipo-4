const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization && authorization === "maria's store") {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = { authenticate };


