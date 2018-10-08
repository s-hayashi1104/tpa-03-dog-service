const parsePathParameters = function(originalPath, pathWithParams) {
  const obj = {};
  const beginWithColon = pathPart => pathPart[0] === ':';

  const paramsArray = originalPath.split('/');
  pathWithParams.split('/').forEach((pathPart, index) => {
    if (beginWithColon(pathPart)) {
      const pathParameterKey = pathPart.slice(1);
      const pathParameterValue = paramsArray[index];
      obj[pathParameterKey] = parseInt(pathParameterValue, 10);
    }
  });
  return obj;
};

module.exports = {
  parsePathParameters,
};
