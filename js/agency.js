// Smooth scrolling via animate()
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash && (window.location.pathname == "/riverside-excite/" || window.location.pathname == "/riverside-excite/startup-toolbox/")) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  window.onhashchange = function() {
    if (this.shouldClosePopup === true) {
      $(this.currentPopup).modal('hide')
      this.shouldClosePopup = false
    }
    if (window.location.hash.startsWith('#startup')) {
      this.shouldClosePopup = true;
      this.currentPopup = window.location.hash
    }
  }
});

// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
      $('#logo').attr('src', 'https://ryanstegmann.github.io/riverside-excite/img/logo-dark.png');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
      $('#logo').attr('src', 'https://ryanstegmann.github.io/riverside-excite/img/logo-light.png');
    }
  });
});

$(document).ready(function(){
  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
    $('#logo').attr('src', 'https://ryanstegmann.github.io/riverside-excite/img/logo-dark.png');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
    $('#logo').attr('src', 'https://ryanstegmann.github.io/riverside-excite/img/logo-light.png');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#service .container a').click(function(event){
    event.preventDefault();
    var $this = $(this);
    var tab = $this.data('tab');

    $this.closest('.container').find('.service-tab-icon.active').removeClass('active');
    $this.closest('.container').find('.service-tab-icon[data-tab="'+tab+'"]').addClass('active');
    $this.closest('.container').find('.service-tab-content.active').removeClass('active');
    $this.closest('.container').find('.service-tab-content[data-tab-content="'+tab+'"]').addClass('active');
});


// Async contact form
$('form[id=contactForm]').submit(function(){
  $.post($(this).attr('action'), $(this).serialize(), function(data, textStatus, jqXHR){
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').hide();
    if (jqXHR.status == 200) {
      $('form[id=contactForm] #success').show();
    }}, 'json').fail(function(){
      $('form[id=contactForm] #success').hide();
      $('form[id=contactForm] #error').hide();
      $('form[id=contactForm] #error').show();
  });
  return false;
});

// Contact form validation
$.validate({
  modules : 'html5, toggleDisabled'
});
