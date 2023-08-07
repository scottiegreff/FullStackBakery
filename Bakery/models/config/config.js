const config = {}
// add your MongoDB connection credentials
config.SERVER = "cluster0";
config.USERNAME = "bakery";
config.PASSOWRD = "CPSC2650";
config.DATABASE = "bakeryDB";
module.exports = config;

module.exports = config

// EXAMPLE
// const config = {};
// // add your MongoDB connection credentials
// config.SERVER = "cluster0";
// config.USERNAME = "bakery";
// config.PASSOWRD = "CPSC2650";
// config.DATABASE = "bakeryDB";
// module.exports = config;

//  OR 
// const config = {}

// // Replace the placeholders with your MongoDB connection credentials
// config.SERVER = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority'
// config.USERNAME = '<username>'
// config.PASSWORD = '<password>'
// config.DATABASE = '<database>'

// module.exports = config