/** @returns lines of provided string. */
const lines =
  (value: string): string[] =>
    value.split(/\n\r?/)

export default lines
