import toHash from '../utils/toHash'
import sortCounters, { orderTypes } from '../utils/sortCounters'

it('toHash', () => {
  const array = [
    { id: 'a', title: 'One', description: 'blablabla' },
    { id: 'b', title: 'Two', description: 'blablabla' },
    { id: 'c', title: 'Three', description: 'blablabla' },
    { id: 'd', title: 'Four', description: 'blablabla' },
    { id: 'e', title: 'Five', description: 'blablabla' }
  ]

  expect(toHash(array, 'id')).toEqual({
    a: { id: 'a', title: 'One', description: 'blablabla' },
    b: { id: 'b', title: 'Two', description: 'blablabla' },
    c: { id: 'c', title: 'Three', description: 'blablabla' },
    d: { id: 'd', title: 'Four', description: 'blablabla' },
    e: { id: 'e', title: 'Five', description: 'blablabla' }
  })

  expect(toHash([], '_id')).toEqual({})

  expect(toHash([1, 2, 3, 4])).toEqual({ undefined: 4 })
})

it('sortCounters', () => {
  const hash = {
    a: { id: 'a', title: 'Berta', count: 0 },
    b: { id: 'b', title: 'Ana', count: 3 },
    c: { id: 'c', title: 'Felipe', count: 69 },
    d: { id: 'd', title: 'Tomas', count: 4 },
    e: { id: 'e', title: 'Daniel', count: 100 }
  }

  const rDefault = ['a', 'b', 'c', 'd', 'e']
  const rTitleAsc = ['b', 'a', 'e', 'c', 'd']
  const rTitleDesc = ['d', 'c', 'e', 'a', 'b']
  const rCountAsc = ['e', 'c', 'd', 'b', 'a']
  const rCountDesc = ['a', 'b', 'd', 'c', 'e']

  expect(sortCounters(hash, rDefault, orderTypes.DEFAULT)).toEqual(rDefault)
  expect(sortCounters(hash, rDefault, orderTypes.TITLE_ASC)).toEqual(rTitleAsc)
  expect(sortCounters(hash, rDefault, orderTypes.TITLE_DESC)).toEqual(rTitleDesc)
  expect(sortCounters(hash, rDefault, orderTypes.COUNT_ASC)).toEqual(rCountAsc)
  expect(sortCounters(hash, rDefault, orderTypes.COUNT_DESC)).toEqual(rCountDesc)
})
