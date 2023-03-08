const { submitQuery, getInsertId } = require("~root/lib/database");

const insertSong = ({ name, artistId, albumId }) => submitQuery`
      INSERT INTO Songs (name, artist_id, album_id)
      VALUES (${name}, ${artistId}, ${albumId});
  `;

module.exports = getInsertId(insertSong);
