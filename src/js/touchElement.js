const touchEls = document.querySelectorAll(".touchable");

touchEls.forEach((el) => {
  el.addEventListener("touchstart", handleTouchStart);
});

function handleTouchStart(event) {
  const el = event.target;

  el.classList.add("is-touched");
  el.removeEventListener("touchstart", handleTouchStart);
  el.addEventListener("touchend", handleTouchEnd);
}

function handleTouchEnd(event) {
  const el = event.target;

  el.classList.remove("is-touched");
  el.removeEventListener("touchend", handleTouchEnd);
  el.addEventListener("touchstart", handleTouchStart);
}
