const db = require('./../models');
const aggregateChromeHistory = require('./agregateHistory');


async function performDatabaseOperations  () {
  db.sequelize.sync()
    // .then(() => db.authToken.create({ access: 'Hello World', refresh: "isueytiksad"}))
    // .then(() => db.authToken.findAll())
    // .then(authTokens => {
    //   console.log(authTokens)
    // });
    let history = await aggregateChromeHistory();
    console.log(history);
}

// performDatabaseOperations();


module.exports = performDatabaseOperations