const videoModal = document.getElementById('showreel');
  if (videoModal) {
    const modal = new bootstrap.Modal(document.getElementById('showreel')),
      video = document.getElementById('video');
    videoModal.addEventListener('show.bs.modal', (event) => {
      let v = event.relatedTarget,
        videoID = v.getAttribute('data-video'),
        start = v.getAttribute('data-start'),
        end = v.getAttribute('data-end'),
        controls = v.getAttribute('data-controls'),
        origin = window.location.hostname;
      video.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&start=${start}&end=${end}&controls=${controls}&loop=1&rel=0&origin=${origin}`;
      let length = (end - start) * 1000;
      if (end > 0) setTimeout(() => modal.hide(), length);
    });
    videoModal.addEventListener('hide.bs.modal', () => (video.src = ''));
  }