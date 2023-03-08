const modifySongById = require("~root/actions/songs/modifySongById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchSongById = async (req, res) => {
  const { songId } = req.params;
  const { name, artistId, albumId } = req.body;

  try {
    const { song } = await modifySongById({
      songId,
      name,
      artistId,
      albumId
    });
    res.status(201).send({ song });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchSongById;
