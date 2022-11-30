if (localStorage.getItem("count_timer")) {
  var count_timer = localStorage.getItem("count_timer");
} else {
  var count_timer = 10;
}

var minutes = parseInt(count_timer / 60);
var seconds_timer = parseInt(count_timer % 60);

function countDownTimer() {
  if (seconds_timer < 10) {
    seconds_timer = "0" + seconds_timer;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  document.getElementById("minute").innerText = minutes;
  document.getElementById("second").innerText = seconds_timer;
  if (count_timer <= 0) {
    localStorage.clear("count_timer");
  } else {
    count_timer = count_timer - 1;
    minutes = parseInt(count_timer / 60);
    seconds_timer = parseInt(count_timer % 60);
    localStorage.setItem("count_timer", count_timer);
    setTimeout("countDownTimer()", 1000);
  }
}

setTimeout("countDownTimer()", 1000);
