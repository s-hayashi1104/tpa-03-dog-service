const { parsePathParameters } = require('./utils');


describe('parsePathParameters', () => {
  test('should return an object', () => {
    expect(parsePathParameters('', '')).toBeDefined();
    expect(typeof parsePathParameters('', '')).toBe('object');
  });

  //
  // TODO: parsePathParameters のユニットテストを追加しよう
  //
});
