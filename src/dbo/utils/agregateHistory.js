
const sqlite3 = require('sqlite3').verbose();
const path = 'C:/Users/croit/AppData/Local/Google/Chrome/User Data/Default/History';

function aggregateChromeHistory() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(path, sqlite3.OPEN_READONLY, (err) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      console.log('Connected to the database.');
      
      db.all('SELECT * FROM visited_links', [], (err, rows) => {
        if (err) {
          console.error(err.message);
          reject(err);
        }
        resolve(rows);

        // Logic to minimize the data into url domain and count

      });
  
      db.close((err) => {
        if (err) {
          console.error(err.message);
          reject(err);
        }
        console.log('Database connection closed.');
      });
    });
  });
}

module.exports = aggregateChromeHistory;