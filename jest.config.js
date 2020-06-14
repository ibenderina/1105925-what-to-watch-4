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
    "^@consts(.*)$": `<rootDir>/src/consts/consts`
  },
  "coveragePathIgnorePatterns": [`/test.setup.js`],
};
