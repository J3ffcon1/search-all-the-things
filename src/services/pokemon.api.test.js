import { checkResponseData } from './pokemonAPI';


describe('search response', () => {

  it('returns json if Response is "true"', () => {
    const data = { Response: 'True' };
    const output = checkResponseData(data);
    expect(output).toBe(data);
  });

  it('throws an error with data.Error if Response is False', () => {
    const data = { Response: 'False', Error: 'Here/s the error' };
    expect(() => {
      checkResponseData(data);
    }).toThrow(data.Error);
  });
});