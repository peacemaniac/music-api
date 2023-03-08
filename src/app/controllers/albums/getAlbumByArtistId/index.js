const fetchAlbumByArtistId = require("~root/actions/albums/fetchAlbumByArtistId");
const handleAPIError = require("~root/utils/handleAPIError");

const getAlbumByArtistId = async (req, res) => {
  const { artistId } = req.params;

  try {
    const { album } = await fetchAlbumByArtistId({ artistId });

    res.status(201).send({ album });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAlbumByArtistId;
