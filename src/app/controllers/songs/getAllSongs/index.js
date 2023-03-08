const handleAPIError = require("~root/utils/handleAPIError");
const fetchAllSongs = require("~root/actions/songs/fetchAllSongs");

const getAllSongs = async (req, res) => {
  try {
    const { songs } = await fetchAllSongs();

    res.status(201).send({ songs });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllSongs;
