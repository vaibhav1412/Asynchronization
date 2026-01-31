document.addEventListener("DOMContentLoaded", () => {

  let start = document.getElementById("start");
  let stop = document.getElementById("stop");
  let sec = document.getElementById("sec");
  let min = document.getElementById("min");
  let hour = document.getElementById("hours");

  let id = null;

  start.addEventListener("click", () => {
    if (id !== null) return; // prevent multiple timers

    id = setInterval(() => {
      let s = Number(sec.textContent);
      let m = Number(min.textContent);
      let h = Number(hour.textContent);

      s++;

      if (s === 60) {
        s = 0;
        m++;
      }

      if (m === 60) {
        m = 0;
        h++;
      }

      sec.textContent  = (s < 10) ? "0" + s : s;
      min.textContent  = (m < 10) ? "0" + m : m;
      hour.textContent = (h < 10) ? "0" + h : h;

    }, 1000);
  });

  stop.addEventListener("click", () => {
    clearInterval(id);
    id = null;
  });

});
