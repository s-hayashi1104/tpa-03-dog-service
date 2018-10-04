const utils = require('./utils');

const parsePathParametersMiddleware = (req, res, next) => {
  const params = utils.parsePathParameters(req.originalUrl, '/api/dog/:id');
  req.myParams = params;
  // nextは何か？
  // express middleware も理解しとこう：
  // https://expressjs.com/ja/guide/using-middleware.html
  next();
};

module.exports = {
  parsePathParametersMiddleware,
};
