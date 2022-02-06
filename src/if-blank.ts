import blank from './blank.js'

/** Maps blank string to arbitrary value. Returns value as is if not blank. */
const ifBlank =
  <T>(value: string, then: T) =>
    blank(value) ?
      then :
      value

export default ifBlank
