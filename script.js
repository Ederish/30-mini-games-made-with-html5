$(document).ready(function(){

  var data = { gallery: [
      {title: "Ajedres", img: "logo/ajedrez.svg", href:"juegos/ajedrez.html"},
      {title: "Solitario", img: "logo/solitario.svg",  href:"juegos/solitario.html"},
      {title: "Torre", img: "logo/jenga.svg", href:"juegos/torre.html"},
      {title: "Cubo de Rubik", img: "logo/rubik.svg",href:"juegos/rubik/index.html"},
      {title: "Color Switch", img: "logo/color.svg", href:"juegos/color.html"},
      {title: "Sinon Dice", img: "logo/simon.svg",href:"juegos/simon/index.html"},
      {title: "Tetris", img: "logo/tetris.svg", href:"juegos/tetris.html"},
      {title: "Pong", img: "logo/pong.svg",href:"juegos/pong.html"},
      {title: "Sudoku", img: "logo/sudoku.svg",href:"juegos/sudoku.html"},
      {title: "2048", img: "logo/2048.svg",href:"juegos/2048.html"},
      {title: "Rompe Cabezas", img: "logo/rompecabezas.svg",href:"juegos/rompecabezas.html"},
      {title: "Puzzle", img: "logo/puzzle.svg",href:"juegos/puzzle/index.html"},
      {title: "Cub-n-pup", img: "logo/mickey.svg",href:"juegos/cub-n-pup/index.html"},
      {title: "Memoria", img: "logo/memoria.svg",href:"juegos/memoria/index.html"},
      {title: "Crossy Road", img: "logo/crossy.svg",href:"juegos/crossy.html"},
      {title: "Rabbit Run", img: "logo/rabbit.svg",href:"juegos/rabbit-run/index.html"},
      {title: "Arqueria", img: "logo/arco.svg",href:"juegos/arco.html"},
      {title: "Enciende la luz", img: "logo/bombilla.svg",href:"juegos/luz.html"},
      {title: "Roket 69", img: "logo/cohete.svg",href:"juegos/roket.html"},
      {title: "Power Source", img: "logo/space.svg",href:"juegos/power source/index.html"},
      {title: "Snake", img: "logo/snake.svg",href:"juegos/snake.html"},
      {title: "Horse Jumping", img: "logo/hors.svg",href:"juegos/hors.html"},
      {title: "Hockey", img: "logo/hockey.svg",href:"juegos/hockey.html"},
      {title: "Pinball", img: "logo/pinball.svg",href:"juegos/pinball/index.html"},
    ]};
    var source   = $('#template').html();
    var template = Handlebars.compile(source);
    $('#content').html(template(data));
  });
  $(window).load(function(){
    var $items = $('.item');
    $items.on({
      mousemove: function(e) {
        var $that = $(this);
        $that.find('.overflow > img').velocity({
          translateZ: 0,
          translateX: Math.floor((e.pageX - $that.offset().left) - ($that.width() / 2)),
          translateY: Math.floor((e.pageY - $that.offset().top) - ($that.height() / 2)),
          scale: '2'
      }, {
          duration: 400,
          easing: 'linear',
          queue: false
        });
      },
      mouseleave: function() {
        $(this).find('.overflow > img').velocity({
          translateZ: 0,
          translateX: 0,
          translateY: 0,
          scale: '1'
        }, {
          duration: 1000,
          easing: 'easeOutSine',
          queue: false
        });
      }
    });
  });