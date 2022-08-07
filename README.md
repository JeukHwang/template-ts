# template-ts
Template for TypeScript with eslint and webpack config

## Brief explanation
- Input directory is `src`
- Output directory is `dist`
- Configuration directory is `config`

## Getting started
1. Change `template-ts` to `<your-own-repo-name>`
2. Change the content of `package.json/description`, `README.md`, and `src`
4. To add types in module `<module-name>`, install `@types/<module-name>` and add `<module-name>` to `dist.tsconfig.json/compilerOptions/types`


## Command explanation
| Command  | Explanation                                  | Related configuration file                             |
|----------|----------------------------------------------|--------------------------------------------------------|
| lint     | Lint `src`                                   | config/.eslint.cjs                                     |
| lint:fix | Lint and fix `src`                           | config/.eslint.cjs                                     |
| build    | Compile `src` to `dist/build`                | config/build.config.json                               |
| start    | Run node with `dist`                         |                                                        |
| build:wp | Compile and bundle `src` to `dist/bundle.js` | config/bundle.webpack.cjs, config/bundle.tsconfig.json |
| start:wp | Run node with `dist/bundle.js`               |                                                        |

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