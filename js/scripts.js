console.log('its a man babbbyyy');

var resizeTabs = function(){
  $('.tab').hover(function(){
    console.log('little miss piggy');
    $('.tab').addClass('closed');
    $(this).removeClass('closed').addClass('open');
  }, function(){
    console.log('its me kermit');
    $('.tab').removeClass('closed').removeClass('open');
  })
};
$(document).ready(function() {
    // all custom jQuery will go here
    resizeTabs();
});
