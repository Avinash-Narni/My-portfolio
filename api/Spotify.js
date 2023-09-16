// api/spotify.js
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

  // Your Spotify API logic goes here
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Spotify API!" }),
  };
};
