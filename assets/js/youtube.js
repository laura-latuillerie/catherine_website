const btnUnmute = document.querySelector('#btnUnmute');
const btnMute = document.querySelector('#btnMute');
const btnTurn = document.querySelector('#btnTurn');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const lists = ['PL4pvheXYumia1FQOPEqFbc4MZptoCy79e', 'PL4pvheXYumiZ21sq6Sw-dsXxF6m5eK5Ef', 'PL4pvheXYumiaDiJ8QfNffCLX77ojov8sf', 'PL4pvheXYumiYojZV4b_ea10y6TNxObELh', 'PL4pvheXYumiZd6rdS-eyRInVw-81sGC7d']

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    playerVars: 
          { 'autoplay': 1,
           'controls': 0,
           'rel': 0,
           'ecver': 2,
           'showinfo': 0,
           'disablekb': 1,
           enablejsapi: 1,
            listType:'playlist',
            list: 'PL4pvheXYumia1FQOPEqFbc4MZptoCy79e',
          },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

function stopVideo() {
  player.stopVideo();
}


btnUnmute.addEventListener('click', () => (player.unMute()));
btnMute.addEventListener('click', () => (player.mute()));
btnTurn.addEventListener('click', function () {
  if(player.getPlayerState()==1){ //Returns true if video is playing
    player.pauseVideo();
  }else{
    player.playVideo(); 
  }
});
btnNext.addEventListener('click', function () {
  let playerId = player.playerInfo.playlistId;
  let currentIndex = lists.indexOf(playerId);
  if (currentIndex === 4){
    playerId = lists[0];
  }
  else{
    playerId = lists[currentIndex + 1];
  }
  player.g.src = `https://www.youtube.com/embed/?autoplay=1&controls=0&rel=0&ecver=2&showinfo=0&disablekb=1&enablejsapi=1&listType=playlist&list=${playerId}&origin=http%3A%2F%2Flocalhost%3A5500&widgetid=1`
  player.playVideo(); 
});
btnPrev.addEventListener('click', function () {
  let playerId = player.playerInfo.playlistId;
  let currentIndex = lists.indexOf(playerId);
  if (currentIndex === 0){
    playerId = lists[lists.length - 1];
  }
  else{
    playerId = lists[currentIndex - 1];
  }
  player.g.src = `https://www.youtube.com/embed/?autoplay=1&controls=0&rel=0&ecver=2&showinfo=0&disablekb=1&enablejsapi=1&listType=playlist&list=${playerId}&origin=http%3A%2F%2Flocalhost%3A5500&widgetid=1`
  player.playVideo(); 
});
