var timer = 600;

var interval = setInterval(function() {
  var min = Math.floor(timer / 60);
  var sec = timer - (min * 60);

  //add a leading zero (as a string value) if seconds less than 10
  if (sec < 10) {
    sec = "0" + sec;
  }

  // concatenate with colon
  var message = min.toString() + ":" + sec;
    timer--;

    $('.timer').text(message);
    if (timer === 0) clearInterval(interval);
}, 1000);