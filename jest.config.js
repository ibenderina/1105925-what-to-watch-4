module.exports = {
  "setupFiles": [`./jest.setup.js`],
  "testURL": `http://localhost/`,
  "verbose": true,
  "testRegex": `(/tests/.|(.|/)(test|spec)).(jsx?|tsx?)$`,
  "moduleFileExtensions": [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  "moduleNameMapper": {
    "^@app(.*)$": `<rootDir>/src/components/app/$1`,
    "^@components(.*)$": `<rootDir>/src/components/$1`,
    "^@main(.*)$": `<rootDir>/src/components/main/$1`,
    "^@consts(.*)$": `<rootDir>/src/consts/consts`,
    "^@utils(.*)$": `<rootDir>/src/utils/$1`,
    "^@reducer(.*)$": `<rootDir>/src/reducer/$1`,
    "^@hocs(.*)$": `<rootDir>/src/hocs/$1`,
    "^@api(.*)$": `<rootDir>/src/api/$1`,
  },
  "coveragePathIgnorePatterns": [`/test.setup.js`],
};
