module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "settings": {
    "import/resolver": "webpack",
  },
  "env": {
    "es6": true,
    "browser": true,
  }
};
