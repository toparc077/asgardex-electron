import { some } from 'fp-ts/lib/Option'

import { Pair } from '../types/asgardex'
import { getTickerFormat, getPair, compareShallowStr } from './stringHelper'

describe('helpers/stringHelper/', () => {
  // getTickerFormat

  describe('getTickerFormat', () => {
    it('should get a ticker from pool and symbol', () => {
      const result = getTickerFormat('BNB.TUSDB-000')
      expect(result).toEqual(some('tusdb'))
    })
    it('should get a ticker from symbol', () => {
      const result = getTickerFormat('TUSDB-000')
      expect(result).toEqual(some('tusdb'))
    })
    it('should parse a pair ', () => {
      const result = getTickerFormat('STAKE:TUSDB-000')
      expect(result).toEqual(some('stake:tusdb'))
    })
    it('should returns null of no symbol given ', () => {
      const result = getTickerFormat()
      expect(result).toBeNone()
    })
    it('should lowercase ticker only ', () => {
      const result = getTickerFormat('XXX000')
      expect(result).toEqual(some('xxx000'))
    })
  })

  // getPair

  describe('getPair', () => {
    it('returns a valid value pair for "-" separated strings', () => {
      const result: Pair = getPair('HELLO-WORLD')
      expect(result).toEqual({ source: some('hello'), target: some('world') })
    })
    it('returns a valid source value for non "-" separated strings', () => {
      const result: Pair = getPair('HELLO')
      expect(result.source).toEqual(some('hello'))
      expect(result.target).toBeNone()
    })
    it('returns a null value pair if no value entered', () => {
      const result: Pair = getPair()
      expect(result.source).toBeNone()
      expect(result.target).toBeNone()
    })
  })

  // compareShallowStr

  describe('compareShallowStr', () => {
    it('returns false if strings do not match', () => {
      const result = compareShallowStr('hello', 'world')
      expect(result).toEqual(false)
    })
    it('returns true if strings match', () => {
      const result = compareShallowStr('hello', 'hello')
      expect(result).toEqual(true)
    })
    it('returns true if numerical strings are input to function', () => {
      const result = compareShallowStr('123', '123')
      expect(result).toEqual(true)
    })
  })
})
