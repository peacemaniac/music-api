const handleAPIError = require("~root/utils/handleAPIError");
const createSong = require("~root/actions/songs/createSong");

const postSong = async (req, res) => {
  const { name, artistId, albumId } = req.body;

  try {
    const { songId } = await createSong({ name, artistId, albumId });

    res.status(201).send({
      songId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postSong;
