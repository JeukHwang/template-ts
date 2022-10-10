# template-ts
Template for TypeScript

## Brief explanation
- Input directory is `src`
- Output directory is `dist`
- Configuration directory is `config`

## Getting started
1. Change `template-ts` to `<your-own-repo-name>`
2. Change `Template for TypeScript` to `<your-own-repo-description>`
3. Change the content of `src`
4. To add types in module `<module-name>`, install `@types/<module-name>` and add `<module-name>` to `dist.tsconfig.json/compilerOptions/types`
5. (optional) Rename this markdown file to `template.md` and make new markdown file `README.md`


## Command explanation
| Command      | Explanation                                  | Related configuration file                                                           |
|--------------|----------------------------------------------|--------------------------------------------------------------------------------------|
| lint         | Lint `src`                                   | [config/.eslint.cjs][eslint]                                                         |
| lint:fix     | Lint and fix `src`                           | [config/.eslint.cjs][eslint]                                                         |
| format:check | Check conflict between ESLint and Prettier   | [config/.eslint.cjs][eslint]                                                         |
| format       | Format `src`                                 | [config/.prettierrc.cjs][prettier]                                                   |
| style        | Lint and format `src`                        |                                                                                      |
| build        | Compile `src` to `dist/build`                | [config/build.tsconfig.json][build-tsconfig]                                         |
| start        | Run node with `dist`                         |                                                                                      |
| build:wp     | Compile and bundle `src` to `dist/bundle.js` | [config/bundle.webpack.cjs][webpack], [config/bundle.tsconfig.json][bundle-tsconfig] |
| start:wp     | Run node with `dist/bundle.js`               |                                                                                      |

[eslint]: ./config/.eslintrc.cjs
[prettier]: ./config/.prettierrc.cjs
[webpack]: config/bundle.webpack.cjs
[build-tsconfig]: config/build.tsconfig.json
[bundle-tsconfig]: config/bundle.tsconfig.json

## Others
### Webpack installation
 ```
npm install -g webpack webpack-cli
 ```

### Material Icon Theme configuration in VSC
To change the icon of `*.webpack.cjs`, add follwing code snippets in settings

```
"material-icon-theme.files.associations": {
    "base.webpack.cjs": "webpack",
    "bundle.webpack.cjs": "webpack",
}
```
### Why do this template use both ESLint and Prettier?
- ESLint : `linter` focusing on catching error in code
- Prettier : `formatter` focusing on consistent style of code

- [Compare integration tools](https://stackoverflow.com/questions/44690308)
    - prettier-eslint
    - eslint-plugin-prettier
    - eslint-config-prettier (`used in this project`)
- [Official docs about integration from Prettier](https://prettier.io/docs/en/integrating-with-linters)