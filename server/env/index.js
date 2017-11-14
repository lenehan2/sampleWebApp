var path = require('path');
var productionConfigPath = path.join(__dirname, './production.js');
var testConfigPath = path.join(__dirname, './testing.js');

if (process.env.NODE_ENV === 'testing') {
    console.log("TEST ENV");
    module.exports = require(testConfigPath);
} else {
    console.log("PROD ENV");
    module.exports = require(productionConfigPath);
}
