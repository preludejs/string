# String module

* `blank: (value: string) => boolean`

  @returns `true` if provided string is blank, `false` otherwise.

* `dedent: (value: string) => string`

  @returns string lines without shared indentation.

* `firstIndent: (value: string) => string`

  @returns first line's indent.

* `indentTail: (value: string, indent?: string) => string`

  @returns string with all lines but the first one indented.

* `indent: (value: string, indent_?: string) => string`

  @returns string lines prefixed with provided indentation.

* `lines: (value: string) => string[]`

  @returns lines of provided string.

# Usage

```bash
npm i -E @prelude/string
```

```ts
import * as S from '@prelude/string'
```

# License

```
MIT License

Copyright 2021 Mirek Rusin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
