const updateAlbumByAlbumId = require("./queries/updateAlbumByAlbumId");

const modifyAlbumByAlbumId = async ({ albumId, name, year, artistId }) => {
  const album = await updateAlbumByAlbumId({ albumId, name, year, artistId });

  return { album };
};

module.exports = modifyAlbumByAlbumId;
