const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAlbumByArtistId = ({ artistId }) =>
  submitQuery`
  SELECT *
  FROM Albums
  WHERE artist_id = ${artistId};`;

module.exports = camelKeys(selectAlbumByArtistId);
