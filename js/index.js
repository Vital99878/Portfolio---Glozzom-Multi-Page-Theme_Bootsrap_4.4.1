$('#year').text(new Date().getFullYear());

  //CAROUSEL CONFIGURE
$('.carousel').carousel({
  interval:6000,
  pause:"hover"
});

  // VIDEO PLAY
$(function () {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

  // LIGHTBOX SLIDER INIT - Photo gallery (Index.html, line 179)
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

  //SLICK SLIDER (About.html, line 139)
$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});