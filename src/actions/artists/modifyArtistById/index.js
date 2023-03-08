const updateArtistById = require("./queries/updateArtistById");

const modifyArtistById = async ({ artistId, name, genre }) => {
  const artist = await updateArtistById({ artistId, name, genre });

  return { artist };
};

module.exports = modifyArtistById;
