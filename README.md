# template-ts-eslint
Template for TypeScript + ESLint

## How to use
- Caution
    - Write code in `code` and make build in `build`
- Command
    - `npm run clean` to erase build
    - `npm run build` to make build
    - `npm run reset` to erase previous build and make new build

- Config
    - Add `build` to `.gitignore` if you do not want to upload build
    - Change `target`, `libs` in `build.tsconfig.json/compilerOptions` as you want
    - Add `<lib-name>` to `build.tsconfig.json/compilerOptions/types` after installing `@types/<lib-name>`