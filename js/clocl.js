function updateClock() {
  document.querySelector(".clock").style.color = "#fff";
  const clockContainer = document.querySelector(".clock");

  clockContainer.innerHTML =
    // "<b>" + new Date().toLocaleDateString("uk") + "</b>";
    "<b>" + new Date().toLocaleTimeString("uk") + "</b>";
}
setInterval(updateClock, 1000);
