import * as S from './index.js'

test('upperFirst', () => {
  expect(S.upperFirst('')).toEqual('')
  expect(S.upperFirst('abc def')).toEqual('Abc def')
  expect(S.upperFirst('Abc def')).toEqual('Abc def')
  expect(S.upperFirst('åbc def')).toEqual('Åbc def')
})
