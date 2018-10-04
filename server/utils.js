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
  const paramsIndex = pathWithParams.split('/').join('').indexOf(':');
  const params = originalPath.split('/').join('').slice(paramsIndex);
  return { id: params };
};

module.exports = {
  parsePathParameters,
};
