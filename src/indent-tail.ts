import lines from './lines.js'

/** @returns string with all lines but the first one indented. */
const indentTail =
  (value: string, indent = '  '): string =>
    indent === '' ?
      value :
      lines(value).join('\n' + indent)

export default indentTail
