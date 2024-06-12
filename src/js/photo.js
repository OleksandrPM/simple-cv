import photo from "../images/CV_photo.jpg";

document.querySelectorAll(".photo-thumb").forEach((el) => {
  el.innerHTML = `<img src="${photo}" alt="the photo of the CV owner" />`;
});
