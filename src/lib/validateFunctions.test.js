import {
  isValidProductName,
  isValidMailingAdress,
  isValidPrice,
} from '../lib/validateFunctions';

describe('Product name is valid', () => {
  it('should invalidate the product name when it is less  than 2 characters', () => {
    const result = isValidProductName('A');
    expect(result).toBeFalsy();
  });
});

describe('Email function validation', () => {
  it('it should return false when no "@" symbol is present in the email address', () => {
    const result = isValidMailingAdress('danieldaniel.de');
    expect(result).toBeFalsy();
  });
});

describe('Price Decimal Rule Validation', () => {
  it('it should return false when there are more than 3 decimal digits', () => {
    const result = isValidPrice('59,9999');
    expect(result).toBeFalsy();
  });
});

describe('Price Decimal Expression Validation', () => {
  it('it should return false when a p.t. is used instead of a comma to indicate a decimal break', () => {
    const result = isValidPrice('59.9999');
    expect(result).toBeFalsy();
  });
});

// describe('Price Letter Validation', () => {
//   it('it should return false when when there are letters in the expression', () => {
//     const result = isValidPrice('ABCD');
//     expect(result).toBeFalsy();
//   });
// });
