# @prelude/string Developer Guide

## Build & Test Commands
- `make build`: Build CommonJS and ES modules
- `make clean`: Remove build artifacts
- `pnpm t`: Run all tests
- `pnpm jest src/path/to/file.test.ts`: Run single test file
- `pnpm jest -t "test description"`: Run tests matching description
- `make rebuild`: Clean and rebuild

## Code Style Guidelines
- **Formatting**:
  - Use Prettier with config (.prettierrc.json)
  - No semicolons, single quotes, no trailing commas
  - 120 character line width
  - Arrow functions without parentheses for single params
  - Prefer full name when mapping ie. `lines.map(line => f(line))` or use underscore for single params ie. `lines.map(_ => f(_))`, avoid using single letter variables
  - use _ suffix for simple name conflict resolutions or find better prefix or suffix, avoid prefixes or suffixes like a and b
- **File/Function Naming**: Use kebab-case for files and exports
- **Imports**:
  - Use .js extension in import paths
  - Prefer star imports over named imports
  - Use default imports when possible (ie. for single functions)
- **Exports**:
  - Prefer single functions with named and default exports in single files
  - For more complex modules, use named exports
  - Export primary type as T, primary class as C and interface as I.
- **Types**:
  - Strict type checking enabled
  - No unused locals/parameters
  - No implicit returns/anys
  - Prefer types over interfaces
  - Prefer types over classes
  - Don't use enums, use unions instead
  - Prefer functions over const variables
- **Error Handling**: Prefer functional patterns over exceptions
- **Testing**: Jest for tests, place next to implementation files
- **Documentation**:
  - Use JSDoc comments, especially for public APIs
  - index.ts should include package level documentation
  - Readme.md should include overview of package purpose and summary of the functionality
