const utils = require('./utils');

const parsePathParametersMiddleware = (req, res, next) => {
  const params = utils.parsePathParameters(req.originalUrl, '/api/dog/:id');
  req.myParams = params;
  next();
};

module.exports = {
  parsePathParametersMiddleware,
};
