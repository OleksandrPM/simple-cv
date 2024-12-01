import { throttle } from "lodash";
import { switchNavLinkInScrolling } from "./navigation";

const throttleTime = 300;

window.addEventListener(
  "scroll",
  throttle(() => {
    handleScroll();
  }, throttleTime)
);

function handleScroll() {
  switchNavLinkInScrolling();
}
