var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
const playlistModal = document.getElementById('playlist-clips');

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: '92UXfEIc4lI',
    events: {
      'onReady': function() {

        playlistModal.addEventListener('hide.bs.modal', () => (stopVideo()));
        $(".video-thumb").click(function() {
          var $this = $(this);
          if (!$this.hasClass("active")) {
            player.loadVideoById($this.attr("data-video"));
            $this.addClass("active").siblings().removeClass("active");
          }
        });
      },
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  player.mute();
}

function stopVideo() {
  player.stopVideo();
}




