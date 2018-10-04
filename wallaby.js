module.exports = function (wallaby) {
  return {
    env: {
      type: 'node'
    },

    testFramework: 'jest',

    files: [
      'src/**/*.js',
      '!src/**/*.[Ss]pec.js',
    ],

    tests: [
      'src/**/*.spec.js'
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
  };
};
