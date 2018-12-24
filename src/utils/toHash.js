export default (array, key) =>
  array.reduce((acc, current) => {
    acc[current[key]] = current
    return acc
  }, {})
