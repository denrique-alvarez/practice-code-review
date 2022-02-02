import { arrayDiff } from './solution-name.js';

describe('Sample Tests', () => {
  it('Test 1: it should handle `number` values in arrays', () => {
    expect(arrayDiff([1, 1, 2, 3], [2])).toEqual([1, 3]);
  });
  it('Test 2: it should handle `string` values in arrays', () => {
    expect(arrayDiff(['a', 'b', 'b', 'c', 'd'], ['c', 'e'])).toEqual([
      'a',
      'b',
      'd',
    ]);
  });
  it('Test 3: it should handle `string` and `number` values in arrays', () => {
    expect(arrayDiff([1, 2, 't', 2, 3, 3], [3])).toEqual([1, 2, 't']);
  });
  it('Test 4: it should handle `null` in arrays', () => {
    expect(arrayDiff([1, null, 't', 2, null, 3], [3, null])).toEqual([
      1,
      't',
      2,
    ]);
  });
  it('Test 5: it should handle `undefined` in only first array', () => {
    expect(arrayDiff([1, undefined, 't', 2, null, 3], [3, null])).toEqual([
      1,
      undefined,
      't',
      2,
    ]);
  });
  it('Test 6: it should handle `undefined` in both arrays', () => {
    expect(
      arrayDiff([1, undefined, 't', 2, null, 3], [4, undefined, null]),
    ).toEqual([1, 't', 2, 3]);
  });
  it('Test 7: it should handle `NaN` in both arrays', () => {
    expect(
      arrayDiff([1, undefined, 't', NaN, null, 3], [4, undefined, null, NaN]),
    ).toEqual([1, 't', 3]);
  });
});
