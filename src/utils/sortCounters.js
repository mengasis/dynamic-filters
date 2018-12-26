export const orderTypes = {
  DEFAULT: 'default',
  TITLE_ASC: 'title-asc',
  TITLE_DESC: 'title-desc',
  COUNT_ASC: 'count-asc',
  COUNT_DESC: 'count-desc'
}

export default (hash, order) => {
  const keys = Object.keys(hash)

  switch (order) {
    case orderTypes.TITLE_ASC:
      return [...keys].sort((a, b) => ('' + hash[a].title).localeCompare(hash[b].title))

    case orderTypes.TITLE_DESC:
      return [...keys].sort((a, b) => ('' + hash[b].title).localeCompare(hash[a].title))

    default:
      return keys
  }
}
