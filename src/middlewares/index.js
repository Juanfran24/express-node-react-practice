const functionLogErrors = (err, req, res, next) => {
  console.log(err);
  next(err);
}
const boomHandler = (err, req, res, next) => {
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }else{
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  // status to be updated
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

module.exports = {
  boomHandler,
  functionLogErrors,
  errorHandler
};