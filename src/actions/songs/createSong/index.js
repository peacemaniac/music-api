const insertSong = require("./queries/insertSong");

const createSong = async ({ name, artistId, albumId }) => {
  const songId = await insertSong({ name, artistId, albumId });
  return { songId };
};

module.exports = createSong;
