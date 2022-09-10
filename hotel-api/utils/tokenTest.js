const { createError } = require("../utils/error");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");

module.exports.testToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "Please Authenticate First"));
  }
  JWT.verify(token, process.env.MY_KEY, (err, user) => {
    if (err) {
      return next(createError(403, "Invalid Token"));
    }
    req.user = user;
    next();
  }); //retuens error or user info which I added to it in authControler
};

module.exports.verifyUser = (req, res, next) => {
  this.testToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(401, "Not Authorized"));
    }
  });
};
module.exports.checkAdmin = (req, res, next) => {
  this.testToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(401, "Not Authorized"));
    }
  });
};
