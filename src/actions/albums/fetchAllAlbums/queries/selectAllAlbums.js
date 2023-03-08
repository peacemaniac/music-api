const { submitQuery } = require("~root/lib/database");

const selectAllAlbums = () =>
  submitQuery`SELECT album_id, name, year, artist_id FROM Albums;`;

module.exports = selectAllAlbums;
