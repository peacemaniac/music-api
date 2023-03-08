const { submitQuery } = require("~root/lib/database");

const selectAllSongs = () => submitQuery`SELECT * FROM Songs;`;

module.exports = selectAllSongs;
