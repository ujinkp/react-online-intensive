//Core
import { sum, delay, getUniqueID, getFullApiUrl } from './';

describe('instruments:', () => {
    test('sum function should be a function', () =>{
        expect(sum).toBeInstanceOf(Function);
    });
    test('sum function should be throw, when called with non-number type as second argument', () =>{
        expect(() => sum(2, 'привет')).toThrow();
    });
    test('sum function should be throw, when called with non-number type as first argument', () =>{
        expect(() => sum('привет', 2)).toThrow();
    });
    test('sum function should return an additionof two arguments passed', () =>{
        expect(sum(2, 3)).toBe(5);
        expect(sum(1, 8)).toMatchSnapshot();
    });
    test('delay function should return a resolved promise', async() =>{
        await expect(delay()).resolves.toBeUndefined();
    });
    test('getUniqueID function should be a function', () =>{
        expect(getUniqueID).toBeInstanceOf(Function);
    });
    test('getUniqueID function should be throw, when called with non-number type as an argument', () =>{
        expect(() => getUniqueID('привет')).toThrow();
    });
    test('getUniqueID function should produce a string of disired given length', () =>{
        expect(typeof getUniqueID()).toBe('string');
        expect(getUniqueID(5)).toHaveLength(5);
        expect(getUniqueID(13)).toHaveLength(13);
    });
    test('getUniqueID function should produce a default length 15 characters', () =>{
        expect(getUniqueID()).toHaveLength(15);
    });
    test('getFullApiUrl function should be a function', () =>{
        expect(getFullApiUrl).toBeInstanceOf(Function);
    });
    test('getFullApiUrl function should be throw, when called with non-number type as an argument', () =>{
        expect(() => getFullApiUrl('привет')).toThrow();
    });
    test('getFullApiUrl function should produce a string of disired given length', () =>{
        expect(typeof getFullApiUrl('привет', 'привет')).toBe('string');
    });
});
