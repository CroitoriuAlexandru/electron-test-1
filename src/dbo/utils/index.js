const db = require('./../models');

function performDatabaseOperations() {
  db.sequelize.sync()
    .then(() => db.Post.create({ name: 'Hello World' }))
    .then(() => db.Post.findAll())
    .then(posts => {
      console.log(posts)
    });
}

// performDatabaseOperations();


module.exports = performDatabaseOperations