# @prelude/string

A TypeScript library for string manipulation with functional programming principles.

## Core Functions

* `isBlank: (value: string) => boolean`

  Returns `true` if provided string is blank, `false` otherwise.

* `ifBlank: <T>(value: string, thenThunk: () => T) => string | T`

  Maps blank string to arbitrary value. Returns value as is if not blank.

* `dedent: (value: string) => string`

  Returns string lines without shared indentation.

* `firstIndent: (value: string) => string`

  Returns first line's indent.

* `indentTail: (value: string, indent?: string) => string`

  Returns string with all lines but the first one indented.

* `indent: (value: string, indent_?: string) => string`

  Returns string lines prefixed with provided indentation.

## String Transformations

* `upperFirst: (value: string) => string`

  Returns the provided string with the first character as upper case.

* `truncate: (str: string, length: number, suffix?: string) => string`

  Truncates a string to the specified length and adds a suffix if truncated.

* `searchReplace: (source: string, search: string, replacement: string) => string`

  Fuzzy search and replace functionality.

## Case Conversions

* `camelCase: (str: string) => string`

  Converts a string to camelCase.

* `kebabCase: (str: string) => string`

  Converts a string to kebab-case.

* `snakeCase: (str: string) => string`

  Converts a string to snake_case.

* `startCase: (str: string) => string`

  Converts a string to Start Case.

## String Distance

* `distance: (a: string, b: string, method?: 'levenshtein') => number`

  Calculate the distance between two strings using the specified method.

## Lines Module

The library exports a `Lines` namespace with functions for working with string lines:

* `Lines.of: (value: string) => string[]`

  Splits a string into an array of lines, handling different line endings.

* `Lines.similarIndexOf: (sourceLines: string[], searchLines: string[]) => number`

  Finds most similar index in source lines for search lines, useful for fuzzy text search.

* `Lines.distanceAt: (sourceLines: string[], at: number, queryLines: string[], distanceOf?) => number`

  Calculate the similarity score between query and source lines at a given index.

* `Lines.indent: (mutableLines: string[], indentation?: string) => void`

  Mutably indents each line in the array with the specified indentation.

* `Lines.toIndent: (lines: string[], indentation?: string) => string[]`

  Returns a new array of lines with the specified indentation.

### Lines.Diff - Text Diffing Utilities

The Lines module includes powerful diffing capabilities:

* `Lines.Diff.myers: (sourceLines: string[], targetLines: string[]) => Op[]`

  Calculates diff between two sets of lines using the Myers algorithm.

* `Lines.Diff.histogram: (sourceLines: string[], targetLines: string[]) => Op[]`

  Performs histogram-based diff optimized for performance on large inputs.

* `Lines.Diff.Op` - Operations API for working with diff results:
  * `type Op.T` - Diff operation type: `{ type: 'unchanged' | 'removed' | 'added', lines: string[] }`
  * `Op.append` - Appends operations at the end of diff ops
  * `Op.prepend` - Prepends operations at the beginning of diff ops
  * `Op.verify` - Verifies that ops applied to the source produce target
  * `Op.readable` - Maps ops to readable strings with prefixes
  * `Op.dump` - Produces a full debug dump of source, target, and operations

# Usage

```bash
npm i -E @prelude/string
```

```ts
import * as S from '@prelude/string'
```

# License

This project is dedicated to the public domain under [CC0 1.0 Universal (CC0 1.0) Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

To the extent possible under law, the authors listed in [Authors.md](./Authors.md) have waived all copyright and related or neighboring rights to this software and associated documentation files.
