//Core
import { sum } from './';

test('sum function should be a function', () =>{
    expect(sum).toBeInstanceOf(Function);
})

test('sum function should be throw, when called with non-number type as second argument', () =>{
    expect(() => sum(2, 'привет')).toThrow();
})
