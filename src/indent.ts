import indentTail from './indent-tail.js'

/** @returns string lines prefixed with provided indentation. */
const indent =
  (value: string, indent_ = '  '): string =>
    indent_ === '' ?
      value :
      indent_ + indentTail(value)

export default indent
