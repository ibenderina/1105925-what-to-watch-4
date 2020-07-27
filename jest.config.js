module.exports = {
  rootDir: `./src`,
  transform: {
    "^.+\\.tsx?$": `ts-jest`,
    "^.+\\.js?$": `babel-jest`,
  },
  testRegex: `.test.(js?|jsx?|tsx?)$`,
  transformIgnorePatterns: [`/node_modules/`],
  moduleFileExtensions: [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  verbose: true,
  moduleNameMapper: {
    "^@app(.*)$": `<rootDir>/components/app/$1`,
    "^@components(.*)$": `<rootDir>/components/$1`,
    "^@main(.*)$": `<rootDir>/components/main/$1`,
    "^@consts(.*)$": `<rootDir>/consts/consts`,
    "^@utils(.*)$": `<rootDir>/utils/$1`,
    "^@reducer(.*)$": `<rootDir>/reducer/$1`,
    "^@hocs(.*)$": `<rootDir>/hocs/$1`,
    "^@api(.*)$": `<rootDir>/api/$1`,
    "^@root(.*)$": `<rootDir>/$1`,
  },
};
