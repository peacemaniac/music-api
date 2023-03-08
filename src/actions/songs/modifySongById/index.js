const updateSongById = require("./queries/updateSongById");

const modifySongById = async ({ songId, name, artistId, albumId }) => {
  const song = await updateSongById({ songId, name, artistId, albumId });

  return { song };
};

module.exports = modifySongById;
