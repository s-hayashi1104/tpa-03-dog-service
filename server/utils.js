const parsePathParameters = function(originalPath, pathWithParams) {
  const obj = {};
  const beginWithColon = pathPart => pathPart[0] === ':';
  const paramsArray = originalPath.split('/');
  pathWithParams.split('/').forEach((pathPart, index) => {
    if (beginWithColon(pathPart)) {
      const key = pathPart.slice(1);
      const param = paramsArray[index];
      obj[key] = param;
    }
  });
  return obj;
};

module.exports = {
  parsePathParameters,
};
