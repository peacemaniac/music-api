const { submitQuery, camelKeys } = require("~root/lib/database");

const selectSongByAlbumId = ({ albumId }) =>
  submitQuery`
  SELECT *
  FROM Songs
  WHERE album_id = ${albumId};`;

module.exports = camelKeys(selectSongByAlbumId);
