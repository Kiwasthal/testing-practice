import { ceasarCipher } from './ceasarCipher';

it('Checks for different variations ', () => {
  expect(ceasarCipher('abc', 1)).toEqual('bcd');
});

it('Checks for different shifts', () => {
  expect(ceasarCipher('abcdef', 2)).toEqual('cdefgh');
});

it('Works with capitalized letters', () => {
  expect(ceasarCipher('AbC', 1)).toEqual('BcD');
});

it('Works with wraping letters', () => {
  expect(ceasarCipher('xyz', 1)).toEqual('yza');
});

it('Works with complex shift', () => {
  expect(
    ceasarCipher(
      'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.',
      13
    )
  ).toEqual(
    'Vs ur unq nalguvat pbasvqragvny gb fnl, ur jebgr vg va pvcure, gung vf, ol fb punatvat gur beqre bs gur yrggref bs gur nycunorg, gung abg n jbeq pbhyq or znqr bhg.'
  );
});

it('Can not input negative values as shifters', () => {
  expect(ceasarCipher('AbC', -1)).toEqual('No negative Inputs');
});
