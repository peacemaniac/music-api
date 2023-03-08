const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateAlbumByAlbumId = ({
  albumId,
  name = null,
  year = null,
  artistId = null
}) => {
  const updates = [];

  if (name !== null) {
    updates.push(sql`name = ${name}`);
  }

  if (year !== null) {
    updates.push(sql`year = ${year}`);
  }

  if (artistId !== null) {
    updates.push(sql`artist_id = ${artistId}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
      UPDATE 
        Albums
      SET 
        ${updates.reduce(sqlReduce)}
      WHERE 
        album_id = ${albumId};
      `;
  }

  return Promise.resolve();
};

module.exports = updateAlbumByAlbumId;
