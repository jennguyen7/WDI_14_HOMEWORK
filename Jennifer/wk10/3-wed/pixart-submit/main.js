changeStampTool()

$('.change-color').click(function() {
  var color = $('.user-input').val()
  $('.brush-box').css('background-image', 'none')
  $('.brush-box').css('background-color', color)
})

for (var i = 0; i < 100; i++) {
  var $div = $('<div>').addClass('square')
  $('.squares').append($div)
}

$('.squares').on('mouseover', '.square', function(event) {
  if ($('.tools').val() === 'color') {
    var color = $('.brush-box').css('background-color')
    $(event.target).css('background-image', 'none')
    $(event.target).css('background-color', color)
  } else {
    var image = $('.brush-box').css('background-image')
    $(event.target).css('background-image', image)
  }
})

function changeStampTool() {
  var option = $('.tools').val()
  if (option === "color") {
    $('.change-color').show()
    $('.select-movie').hide()
  } else {
    $('.change-color').hide()
    $('.select-movie').show()
  }
}

$('.tools').change(function(event) {
  changeStampTool()
})

$('.select-movie').click(function(event) {
  event.preventDefault();
  var title = $('.user-input').val()
  $.get('http://omdbapi.com?apikey=2f6435d9&t=' + title)
    .done(function(movie) {
      $('.brush-box').css('background-image', 'url(' + movie.Poster + ')')
    })
})