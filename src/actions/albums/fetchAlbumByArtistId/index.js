const selectAlbumByArtistId = require("./queries/selectAlbumByArtistId");

const fetchAlbumByArtistId = async ({ artistId }) => {
  const album = await selectAlbumByArtistId({ artistId });
  return { album };
};

module.exports = fetchAlbumByArtistId;
