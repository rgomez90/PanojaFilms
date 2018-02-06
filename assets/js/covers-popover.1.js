$(document).ready(function() {
  $(".main-cover")
    .addClass("animated fadeInUpBig");
});

$('[data-toggle="popover"]').popover({
  html: true,
  animation: false,
  placement: "right",
  rel: "popover",
  trigger: "click",
    content:
    '<div class="container-fluid">'+
    '<div class="row">'+
        '<div id="movie-logo" class="col-sm-3">'+
            '<span class="helper"></span><img id="cover" src="/assets/img/movies/covers/adapted/tvyt-cover-adapted.jpg" alt="">'+
        '</div>'+
        '<div class="col-sm-9">'+
            '<div class="videoWrapper">'+
                '<iframe src="https://www.youtube.com/embed/mPxpRqWCo_0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'+
            '</div>'+
        '</div>'+
    '</div>'+
    '<div class="row">'+
        '<div class="col-sm">'+
            '<p class="movie-desc">'+
                '<b>Sinopsis:</b> Gabi y Koke son dos amigos de la infancia que han llevado caminos muy diferentes, tras una conversación Gabi se da cuenta que tendrá que elegir'+
                'entre dos hipotéticos futuros  delimitados por el tiempo el vicio y el  talento que traerán diferentes consecuencias para todos los que le'+
                'rodean. </p>'+
        '</div>'+
    '</div>'+
    '<div class="row movie-thumbnail">'+
        '<div class="col-sm" align="center">'+
            '<div class=" carousel slide movie-carousel-pics" data-ride="carousel">'+
                '<div class="carousel-inner">'+
                    '<div class="carousel-item active">'+
                        '<img class="d-block w-100" src="/assets/img/movies/thumbnails/ad1.png" alt="First slide">'+
                    '</div>'+
                    '<div class="carousel-item">'+
                        '<img class="d-block w-100" src="/assets/img/movies/thumbnails/ad2.png" alt="Second slide">'+
                    '</div>'+
                    '<div class="carousel-item">'+
                        '<img class="d-block w-100" src="/assets/img/movies/thumbnails/ad3.png" alt="Second slide">'+
                    '</div>'+
                    '<div class="carousel-item">'+
                        '<img class="d-block w-100" src="/assets/img/movies/thumbnails/ad4.png" alt="Second slide">'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="col-sm" align="center">'+
            '<div class="carousel slide movie-carousel-pics" data-ride="carousel">'+
                '<div class="carousel-inner">'+
                    '<div class="carousel-item active">'+
                        '<img class="d-block w-100" src="/assets/img/movies/thumbnails/ad5.png" alt="First slide">'+
                    '</div>'+
                    '<div class="carousel-item">'+
                        '<img class="d-block w-100" src="/assets/img/movies/thumbnails/ad6.png" alt="Second slide">'+
                    '</div>'+
                    '<div class="carousel-item">'+
                        '<img class="d-block w-100" src="/assets/img/movies/thumbnails/ad7.png" alt="Second slide">'+
                    '</div>'+
                    '<div class="carousel-item">'+
                        '<img class="d-block w-100" src="/assets/img/movies/thumbnails/ad8.png" alt="Second slide">'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
   '</div>'+
'</div>'
});

$('.main-cover').on('shown.bs.popover', function(e) {
  e.preventDefault();
  $('.carousel').carousel({
    interval: 2000,
      });

      $('#cover').addClass('animated flip');
      $('.movie-carousel-pics').addClass('animated zoomInDown');
      $('.movie-desc').addClass('animated fadeIn');
});




