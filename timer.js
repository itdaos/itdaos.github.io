var curr = new Date;
var first = curr.getDate() - curr.getDay();
var last = first + 8;
var bool = true;

var countDownDate = new Date(curr.setDate(last));
countDownDate.setHours(0,0,0,0);
countDownDate = countDownDate.getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var hours = Math.floor(distance / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer__time").innerHTML = hours + "h:"
  + minutes + "m:" + seconds + "s" + (bool ? "|" : "");
  bool = !bool;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer__time").innerHTML = "NOW";
  }
}, 1000);
