module.exports = function(wallaby) {
  return {
    files: ["src/**/models.js", "!src/**/*.spec.js"],

    tests: ["src/**/*.spec.js"],

    env: {
      type: "node",
      runner: "node"
    },

    testFramework: "jest"
  };
};
