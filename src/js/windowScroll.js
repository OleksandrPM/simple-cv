import { throttle } from "lodash";
import { switchNavLinkInScrolling } from "./navigation";

window.addEventListener(
  "scroll",
  throttle(() => {
    switchNavLinkInScrolling();
  }, 300)
);
