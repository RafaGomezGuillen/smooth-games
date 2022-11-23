// Variable to add 12 hours. 720 min = 12 h.
  // const minutes = 720;
  // var addHours = new Date(new Date().getTime() + minutes * 60000);
  // var countDate = new Date('Nov 24, 2022 00:00:00').getTime();
  var countDate = new Date();
  // add a day
  countDate.setDate(countDate.getDate() + 1);
  const newYear = () => {
    var now = Date.now();
    gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var h = Math.floor((gap % day) / hour);
    var m = Math.floor((gap % hour) / minute);
    var s = Math.floor((gap % minute) / second);

    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
  };
  setInterval(() => {
    newYear();
  }, 1000);