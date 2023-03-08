const { submitQuery, camelKeys } = require("~root/lib/database");

const selectSongByArtistId = ({ artistId }) =>
  submitQuery`
  SELECT *
  FROM Songs
  WHERE artist_id = ${artistId};`;

module.exports = camelKeys(selectSongByArtistId);
