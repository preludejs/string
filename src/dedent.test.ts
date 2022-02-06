import * as S from './index.js'

test('dedent', () => {
  expect(S.dedent(`
    hello
      world
    !
  `)).toEqual('hello\n  world\n!')
})
