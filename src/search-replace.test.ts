import * as S from './index.js'
import { test, expect } from '@jest/globals'
import * as Fs from 'node:fs'

function parseQuery(query: string) {
  const match = query.match(/^> SEARCH\n([\s\S]*?)\n= REPLACE\n([\s\S]*?)\n< END\n$/m)
  if (!match) {
    throw new Error(`Invalid query format:\n${query}`)
  }
  return { search: match[1], replace: match[2] }
}

function fixture(name: string) {
  const query = Fs.readFileSync(`./fixtures/${name}.query.txt`, 'utf8')
  const source = Fs.readFileSync(`./fixtures/${name}.source.txt`, 'utf8')
  const target = Fs.readFileSync(`./fixtures/${name}.target.txt`, 'utf8')
  const { search, replace } = parseQuery(query)
  expect(S.searchReplace(source, search, replace)).toEqual(target)
}

test('searchReplace', () => {
  expect(S.searchReplace('hello\nworld', 'wrld', 'universe')).toEqual('hello\nuniverse')
  fixture('search-replace.01')
})
