window.addEventListener("load", function () {
  setTimeout(function () {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("navbar-example2");
    
    preloader.style.display = "none";
    content.style.display = "block";
  }, 200);

});

var typed3 = new Typed('#typed', {
  strings: ['<i>Designer</i>', '<i>Developer</i>', '<i> Larry Daniels</i>'],
  typeSpeed: 100,
  backSpeed: 100,
  smartBackspace: true, // this is a default
  loop: true
});

$('[data-filter]').on('click', function () {
  var filterValue = $(this).data('filter');

  if (filterValue === 'all') {
    $('.item').show();
    var element = document.querySelector('.item');
    element.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out;';
  } else {
    $('.item').hide();
    $('[data-filter="' + filterValue + '"]').show();
  }
});
