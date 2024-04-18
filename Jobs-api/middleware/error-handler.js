const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError={
    //set defautls
    statusCode:err.statusCode||StatusCodes.INTERNAL_SERVER_ERROR,
    msg:err.message||'something went wrong try again later'
  }
  
  if(err.code&&err.code===11000){
    customError.msg=`Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`
    customError.statusCode=400
  }
  //return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({msg:customError.msg})
}

module.exports = errorHandlerMiddleware
