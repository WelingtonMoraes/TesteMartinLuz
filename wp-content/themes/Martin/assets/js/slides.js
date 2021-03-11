$(function(){

	var energia = new Swiper('.swiper-container.energia_content', {
    slidesPerView: 1,
    spaceBetween: 60,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
      }
    }
  });

  var swiper = new Swiper('.swiper-container.info_swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('#modal-contato').on('click', function () {
    var modalconta = document.getElementById('mov-modal');
    if(modalconta.style.right == '0px'){
      $('#mov-modal').css('right', '-510px');
      document.getElementById('iconModal').classList.remove('fa-times');
      document.getElementById('iconModal').classList.add('fa-arrow-left');
    }else{
      $('#mov-modal').css('right', '0px');
      document.getElementById('iconModal').classList.remove('fa-arrow-left');
      document.getElementById('iconModal').classList.add('fa-times');
    }
  });
})

window.onscroll = function() {FunctionScroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function FunctionScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function addZero(n){
	
	if(n < 10){
		return `0${n}`;
	}
	
	return n;
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

    var modal1 = document.getElementById("playvideo1");
    var btn1 = document.getElementById("playV1");
    var span1 = document.getElementsByClassName("close")[0];
    btn1.onclick = function() {
        modal1.style.display = "block";

	    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    }
    span1.onclick = function() {
        modal1.style.display = "none";
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }
    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
            $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
    }


    var modal2 = document.getElementById("playvideo2");
    var btn2 = document.getElementById("playV2");
    var span2 = document.getElementsByClassName("close")[1];
    btn2.onclick = function() {
        modal2.style.display = "block";

	    $('.youtube-video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    }
    span2.onclick = function() {
        modal2.style.display = "none";
        $('.youtube-video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
            $('.youtube-video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
    }


    var modal3 = document.getElementById("playvideo3");
    var btn3 = document.getElementById("playV3");
    var span3 = document.getElementsByClassName("close")[2];
    btn3.onclick = function() {
        modal3.style.display = "block";

	    $('.youtube-video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    }
    span3.onclick = function() {
        modal3.style.display = "none";
        $('.youtube-video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    }
    window.onclick = function(event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
            $('.youtube-video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
    }
    