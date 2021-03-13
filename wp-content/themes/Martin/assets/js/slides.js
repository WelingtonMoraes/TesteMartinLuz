$(function(){

	var reduzir = new Swiper('.swiper-container.home__reduzir--icons---swiper', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1000: {
        slidesPerView: 3,
        slidesPerColumn: 3,
        spaceBetween: 0,
      },
      750: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 0,
      }
    }
  });
})

  var modal = document.getElementById("playvideo");
  var btn = document.getElementById("playV");
  var spanClose = document.getElementsByClassName('close');
  btn.onclick = function() {
      modal.style.display = "block";
	  $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  }
  function closeVideo() {
    modal.style.display = "none";
    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }
  }
    