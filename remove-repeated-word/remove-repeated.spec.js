import { removeConsecutiveDuplicates } from './remove-repeated.js';

describe('Default values', () => {
    it('" --> ""', () => {
        const expected = '';
        const actual = removeConsecutiveDuplicates('');
        expect(actual).toEqual(expected);
    });
    it('No argument --> ""', () => {
        const expected = '';
        const actual = removeConsecutiveDuplicates();
        expect(actual).toEqual(expected);
    });
});
describe('Repeated words', () => {
    it('"My name is is John" --> "My name is John"', () => {
        const expected = 'My name is John';
        const actual = removeConsecutiveDuplicates('My name is is John');
        expect(actual).toEqual(expected);
    });
    it('"My name name is is John" --> "My name is John"', () => {
        const expected = 'My name is John';
        const actual = removeConsecutiveDuplicates('My name name is is John');
        expect(actual).toEqual(expected);
    });
});