const adSinopsis = "Un hombre acude al confesionario de la iglesia para confesar que ha violado los siete pecados capitales, y ha roto los diez mandamientos en un solo día."
const nddjSinopsis = "Diego es un niño pequeño que esta preparando su bicicleta para una gran carrera multitudinaria, aunque sea una carrera para mayores, no hay problema porque Diego sabe que si se cree y se trabaja, se puede."
const tvytSinopsis = "Gabi y Koke son dos amigos de la infancia que han llevado caminos muy diferentes, tras una conversación Gabi se da cuenta que tendrá que elegir entre dos hipotéticos futuros delimitados por el tiempo el vicio y el talento que traerán diferentes consecuencias para todos los que le rodean."
const cylSinopsis = "Matías Panoja es 1 entre 7.000 millones mas, tiene muy clara su insignificancia en el mundo y que es el único cuerdo en este mundo de locos, pero tendrá que convencer a una psicóloga de que así es, si quiere optar al trabajo al que aspira."
const mlmSinopsis = "Los alumnos de una clase tendrán que realizar un ejercicio libre a petición del profesor. Todos parecen llevarlo a cabo salvo un alumno…"

const adYoutubeLink = "https://www.youtube.com/embed/7EX5GstZ3mE"
const nddjYoutubeLink = "https://www.youtube.com/embed/mPxpRqWCo_0"
const tvytYoutubeLink = "https://www.youtube.com/embed/qzEf31RHfrc"
const cylYoutubeLink = "https://www.youtube.com/embed/zsCtJh16r-s"
const mlmYoutubeLink = "https://www.youtube.com/embed/roj5IaZLne8"

var temp = false;

/*$(document).ready(function () {
    $(".main-cover")
        .addClass("animated fadeInUpBig");
});
*/
var t = $('[data-toggle="popover"]')
var s = $('[data-desc]')
$('[data-toggle="popover"]').each(function () {
    var att = $(this).attr('data-desc')
    var sinopsis = ""
    var youtubeLink = ""
    var imagePrefix = ""
    switch (att) {
        case 'ad':
            sinopsis = adSinopsis
            youtubeLink = adYoutubeLink
            break;
        case 'nddc':
            sinopsis = nddjSinopsis
            youtubeLink = nddjYoutubeLink
            break;
        case 'tvyt':
            sinopsis = tvytSinopsis
            youtubeLink = tvytYoutubeLink
            break;
        case 'cyl':
            sinopsis = cylSinopsis
            youtubeLink = cylYoutubeLink
            break;
        case 'mlm':
            sinopsis = mlmSinopsis
            youtubeLink = mlmYoutubeLink
            break;
        default:
            break;
    }
    imagePrefix = att
    $(this).popover({
        html: true,
        animation: true,
        placement: "right",
        rel: "popover",
        trigger: "manual ",
        content:
            '<div class="container-fluid popovr">' +
            '<div class="row">' +
            '<div id="movie-logo" class="col-sm-3">' +
            '<span class="helper"></span><img id="cover" src="/assets/img/movies/covers/adapted/' + imagePrefix + '-cover-adapted.jpg" alt="' + imagePrefix + '">' +
            '</div>' +
            '<div class="col-sm-9">' +
            '<div class="videoWrapper">' +
            '<iframe src="' + youtubeLink + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-sm">' +
            '<p class="movie-desc">' +
            '<b>Sinopsis: </b>' + sinopsis + '</p>' +
            '</div>' +
            '</div>' +
            '<div class="row movie-thumbnail">' +
            '<div class="col-sm" align="center">' +
            '<div class=" carousel slide movie-carousel-pics" data-ride="carousel">' +
            '<div class="carousel-inner">' +
            '<div class="carousel-item active">' +
            '<img class="d-block w-100" src="/assets/img/movies/thumbnails/' + imagePrefix + '1.png" alt="' + imagePrefix + '">' +
            '</div>' +
            '<div class="carousel-item">' +
            '<img class="d-block w-100" src="/assets/img/movies/thumbnails/' + imagePrefix + '2.png" alt="' + imagePrefix + 'e">' +
            '</div>' +
            '<div class="carousel-item">' +
            '<img class="d-block w-100" src="/assets/img/movies/thumbnails/' + imagePrefix + '3.png" alt="' + imagePrefix + 'e">' +
            '</div>' +
            '<div class="carousel-item">' +
            '<img class="d-block w-100" src="/assets/img/movies/thumbnails/' + imagePrefix + '4.png" alt="' + imagePrefix + 'e">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-sm" align="center">' +
            '<div class="carousel slide movie-carousel-pics" data-ride="carousel">' +
            '<div class="carousel-inner">' +
            '<div class="carousel-item active">' +
            '<img class="d-block w-100" src="/assets/img/movies/thumbnails/' + imagePrefix + '5.png" alt="' + imagePrefix + '">' +
            '</div>' +
            '<div class="carousel-item">' +
            '<img class="d-block w-100" src="/assets/img/movies/thumbnails/' + imagePrefix + '6.png" alt="' + imagePrefix + 'e">' +
            '</div>' +
            '<div class="carousel-item">' +
            '<img class="d-block w-100" src="/assets/img/movies/thumbnails/' + imagePrefix + '7.png" alt="' + imagePrefix + 'e">' +
            '</div>' +
            '<div class="carousel-item">' +
            '<img class="d-block w-100" src="/assets/img/movies/thumbnails/' + imagePrefix + '8.png" alt="' + imagePrefix + 'e">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    }).mouseenter(function () {
        var $po = $(this).popover();
               $(this).popover('show');
               $('.popover-body').mouseleave(function(){
                   $po.popover('hide');
               })
    })
});

$('.main-cover').on('shown.bs.popover', function (e) {
    e.preventDefault();
    $('.carousel').carousel({
        interval: 2000,
    });
    temp = false;
    $('#cover').addClass('animated flip');
    $('.movie-carousel-pics').addClass('animated zoomInDown');
    $('.movie-desc').addClass('animated fadeIn');
    $('.popover-body').mouseleave(function () {
        $(this).popover('hide');
    });
});







