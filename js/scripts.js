var toggleScreenview = function(){
  console.log('its a maaaaan babbyyyyy!')
  $('.play-game-click').on('click', function(){
    $('.arcade-wrap').toggleClass('fullview');
    $('.arcade-wrap').toggleClass('screenview');
  })
};
$(document).ready(function() {
    // all custom jQuery will go
    toggleScreenview();
});
