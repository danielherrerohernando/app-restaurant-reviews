const System = require('systemic');
const { join } = require('path');

module.exports = () => new System({ name: 'app-restaurant-reviews' }).bootstrap(join(__dirname, 'components'));
