const modifyAlbumByAlbumId = require("~root/actions/albums/modifyAlbumByAlbumId");
const handleAPIError = require("~root/utils/handleAPIError");

const patchAlbumByAlbumId = async (req, res) => {
  const { albumId } = req.params;
  const { name, year, artistId } = req.body;

  try {
    const { album } = await modifyAlbumByAlbumId({
      albumId,
      name,
      year,
      artistId
    });
    res.status(201).send({ album });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchAlbumByAlbumId;
