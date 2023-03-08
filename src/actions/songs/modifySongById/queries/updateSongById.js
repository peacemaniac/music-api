const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateSongById = ({
  songId,
  name = null,
  artistId = null,
  albumId = null
}) => {
  const updates = [];

  if (name !== null) {
    updates.push(sql`name = ${name}`);
  }

  if (artistId !== null) {
    updates.push(sql`artist_id = ${artistId}`);
  }

  if (albumId !== null) {
    updates.push(sql`album_id = ${albumId}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
      UPDATE 
        Songs
      SET 
        ${updates.reduce(sqlReduce)}
      WHERE 
        song_id = ${songId};
      `;
  }

  return Promise.resolve();
};

module.exports = updateSongById;
