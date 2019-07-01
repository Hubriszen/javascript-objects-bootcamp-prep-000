var playlist= {xxx: "intro"};
function updatePlaylist (playlist, artistname,songtitle){
  
  return Object.assign(playlist,{[artistname]:songtitle});
}


function removeFromPlaylist(playlist, artist) {delete playlist.artistname}

return playlist;

