/* eslint-disable prettier/prettier */
/* eslint-disable folders/match-regex */

import { intersection } from './intersection.js';



describe('Creates a new array based on the common elements of two other arrays', () => {
    describe('Check for the default values', () => {
        it('Empty array in first parameter', () => {
            const expected = [];
            const actual = intersection([], [1, 2, 3]);
            expect(expected).toEqual(actual);
        });
        it('Empty array in second parameter', () => {
            const expected = [];
            const actual = intersection([1, 2, 3], []);
            expect(expected).toEqual(actual);
        });
        it('Two empty parameters', () => {
            const expected = [];
            const actual = intersection([], []);
            expect(expected).toEqual(actual);
        });
        it('Calling the function without passing arguments', () => {
            const expected = [];
            const actual = intersection();
            expected(expected).toEqual(actual);
        });
    });
});