const touchableClassName = "touchable";
const touchingClassName = "is-touched";

document.addEventListener("touchstart", handleTouchStart);

function handleTouchStart(event) {
  const touchingEl = event.target;

  if (touchingEl.classList.contains(touchableClassName)) {
    touchingEl.classList.add(touchingClassName);
    touchingEl.addEventListener("touchend", handleTouchEndEl);
  }
}

function handleTouchEndEl(event) {
  const touchingEl = event.target;

  touchingEl.removeEventListener("touchend", handleTouchEndEl);
  setTimeout(() => {
    touchingEl.classList.remove(touchingClassName);
  }, 200);
}
