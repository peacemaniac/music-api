const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const postArtist = require("./controllers/artists/postArtist");
const getAllArtists = require("./controllers/artists/getAllArtists");
const getArtistById = require("./controllers/artists/getArtistById");
const updateArtistById = require("./controllers/artists/updateArtistById");
const deleteArtistById = require("./controllers/artists/deleteArtistById");

//Albums

const postAlbum = require("./controllers/albums/postAlbum");
const getAllAlbums = require("./controllers/albums/getAllAlbums");
const getAlbumByAlbumId = require("./controllers/albums/getAlbumByAlbumId");
const getAlbumByArtistId = require("./controllers/albums/getAlbumByArtistId");
const deleteAlbumByAlbumId = require("./controllers/albums/deleteAlbumByAlbumId");
const updateAlbumByAlbumId = require("./controllers/albums/updateAlbumByAlbumId");

//Songs

const postSong = require("./controllers/songs/postSong");
const getSongByAlbumId = require("./controllers/songs/getSongByAlbumId");
const getSongByArtistId = require("./controllers/songs/getSongByArtistId");
const updateSongById = require("./controllers/songs/updateSongById");
const getAllSongs = require("./controllers/songs/getAllSongs");
const deleteSongById = require("./controllers/songs/deleteSongById");
const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

router.post("/artists", postArtist);

router.get("/artists", getAllArtists);

router.get("/artists/:artistId", getArtistById);

router.patch("/artists/:artistId", updateArtistById);

router.delete("/artists/:artistId", deleteArtistById);

//Album routes

router.post("/albums", postAlbum);
router.get("/albums", getAllAlbums);
router.get("/albums/:albumId", getAlbumByAlbumId);
router.get("/albums/:artistId/albums", getAlbumByArtistId);
router.delete("/albums/:albumId", deleteAlbumByAlbumId);
router.patch("/albums/:albumId", updateAlbumByAlbumId);

//Song routes
router.post("/songs", postSong);
router.get("/albums/:albumId/songs", getSongByAlbumId);
router.get("/songs/:artistId/songs", getSongByArtistId);
router.get("/songs", getAllSongs);
router.patch("/songs/:songId", updateSongById);
router.delete("/songs/:songId", deleteSongById);
module.exports = router;
