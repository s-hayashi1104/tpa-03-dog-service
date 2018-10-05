/**
 * parsePathParameters
 *
 * この関数は二つの文字列を与えられます。
 * path parameters を見極めてオブジェクトを返しましょう。
 * path parameters は pathWithParams 文字列の/の間にある:xxx がパラメターとなります。
 * 下記の例をご覧ください：
 *
 * 入力: '/posts/3/comments/4', '/posts/:postId/comments/:commentId'
 * 出力: {
 *   postId: 3,
 *   commentId: 4
 * }
 */
const parsePathParameters = function(originalPath, pathWithParams) {
  const obj = {};
  const paramsArray = originalPath.split('/');
  pathWithParams.split('/').forEach((v, i) => {
    if (v[0] === ':') {
      const key = v.slice(0);
      const param = paramsArray[i];
      Object.defineProperty(obj, key, {});
      obj[key] = param;
      console.log(obj);
    }
  });
  return obj;
};

module.exports = {
  parsePathParameters,
};
