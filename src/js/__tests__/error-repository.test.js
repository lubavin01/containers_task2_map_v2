import ErrorRepository from "../error-repository";

test('1', () => {
  const repo = new ErrorRepository();

  expect(repo.translate(1)).toEqual('error');
  expect(repo.translate(2)).toEqual('critical error');
  expect(repo.translate(10)).toEqual('super critical error');
  expect(repo.translate(3)).toEqual('Unknown error');
});