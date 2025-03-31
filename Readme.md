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

This project is dedicated to the public domain under [CC0 1.0 Universal (CC0 1.0) Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

To the extent possible under law, the authors listed in [Authors.md](./Authors.md) have waived all copyright and related or neighboring rights to this software and associated documentation files.
