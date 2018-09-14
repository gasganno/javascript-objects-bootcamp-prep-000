var playlist = { Young Widows: "Old Skin" };

function updatePlaylist(object, artist, title) {
  object[artist] = title
    return object
}

function removeFromPlaylist(object, artist) {
  delete object.artist;
  return object
}




























/*var playlist = { Jawbox: "Savory" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}
*/
