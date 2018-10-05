const parsePathParameters = function(originalPath, pathWithParams) {
  const obj = {};
  const paramsArray = originalPath.split('/');
  pathWithParams.split('/').forEach((v, i) => {
    if (v[0] === ':') {
      const key = v.slice(1);
      const param = paramsArray[i];
      obj[key] = param;
      console.log(obj);
    }
  });
  return obj;
};

module.exports = {
  parsePathParameters,
};
