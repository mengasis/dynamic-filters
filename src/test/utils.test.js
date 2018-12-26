import toHash from '../utils/toHash'

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
