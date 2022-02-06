const upperFirst =
  (value: string): string =>
    value === '' ?
      value :
      value[0].toUpperCase() + value.slice(1)

export default upperFirst
