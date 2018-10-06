const { parsePathParameters } = require('./utils');


describe('parsePathParameters', () => {
  test('should return an object', () => {
    expect(parsePathParameters('', '')).toBeDefined();
    expect(typeof parsePathParameters('', '')).toBe('object');
  });
});
describe('parsePathParameters', () => {
  test('should be an object in params', () => {
    expect(parsePathParameters('/api/dog/1', '/api/dog/:id')).toEqual({ 'id': 1 });
    expect(parsePathParameters('/hoge/fuga/piyo/233', '/hoge/fuga/piyo/:id')).toEqual({ 'id': 233 });
    expect(parsePathParameters('/posts/3/comments/4', '/posts/:postId/comments/:commentId')).toEqual({ 'postId': 3, 'commentId': 4 });
  });
});
