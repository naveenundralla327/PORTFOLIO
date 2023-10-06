// Smooth scroll functionality
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });

  // Toggle mobile navigation
  $(document).ready(function() {
    $('.menu-toggle').on('click', function() {
      $('nav').toggleClass('active');
    });
  });

  // Highlight active navigation link
  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();
    $('nav ul li a').each(function() {
      var link = $(this);
      var ref_elem = $(link.attr('href'));
      if (ref_elem.position().top <= cur_pos && ref_elem.position().top + ref_elem.height() > cur_pos) {
        $('nav ul li a').removeClass('active');
        link.addClass('active');
      } else {
        link.removeClass('active');
      }
    });
  });

  // Fade in elements on scroll
  $(window).on('scroll', function() {
    $('.fade-in').each(function() {
      var pos = $(this).offset().top;
      var win_top = $(window).scrollTop();
      if (pos < win_top + 600) {
        $(this).addClass('visible');
      }
    });
  });

  