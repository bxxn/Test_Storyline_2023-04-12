$('.hotspot .icon').click(function() {
  var $parent = $(this).parent();
  $parent.toggleClass('open');
  $('.hotspot.open').not($parent).removeClass('open');

});

$('.hotspot').each(function(e, i) {
  var $this = $(this);
  var css = detectPosition($this, e);
  $(this).addClass(css.css).attr('style', css.styles)
});