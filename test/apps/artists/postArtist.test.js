const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
const deleteArtistById = require("./queries/deleteArtistById");

safeDescribe("#POST artists", () => {
  let createdArtistId;

  after(async () => {
    await deleteArtistById({ artistId: createdArtistId });
  });

  it("creates a new artist in the database", async () => {
    const response = await request(router)
      .post("/artists")
      .send({
        name: "Tame Impala",
        genre: "Rock"
      });

    createdArtistId = response.body.artistId;

    expect(response.status).to.equal(201);
  });
});
