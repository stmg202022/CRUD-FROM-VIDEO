const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // //WRONG MONGODB ID ERROR
  if (err.name === "CastError") {
    err.message = "Resorce not found";
    err.statusCode = 404;
  }

  // //MONGOOSE DUPLICATE KEY ERROR
  // if (err.code === 11000) {
  //   const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
  //   err = new ErrorHandler(message, 400);
  // }

  // // WRONG JWT ERROR
  // if ((err.name = "JsonWebTokenError")) {
  //   const message = "Json Token is Invalid, try again";
  //   err = new ErrorHandler(message, 400);
  // }

  // //JWT EXPIRE ERROR
  // if ((err.name = "TokenExpiredError")) {
  //   const message = "Json Token is Expired, try again";
  //   err = new ErrorHandler(message, 400);
  // }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
