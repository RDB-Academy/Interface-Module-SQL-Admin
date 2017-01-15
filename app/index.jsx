if (process.env.NODE_ENV === 'production') {
  module.exports = require('./index.prod.jsx'); // eslint-disable-line
} else {
  module.exports = require('./index.dev.jsx'); // eslint-disable-line
}
