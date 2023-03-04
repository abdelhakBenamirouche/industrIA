const detailsTog = document.querySelector("[data-details-toggle=false]");
const details = document.querySelector("[data-details]");
const video = document.getElementById("video");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error accessing camera", error);
  });

detailsTog.addEventListener("click", () => {
  if (detailsTog.dataset.detailsToggle === "false") {
    details.style.display = "block";
    detailsTog.dataset.detailsToggle = "true";
  } else if (detailsTog.dataset.detailsToggle === "true") {
    details.style.display = "none";
    detailsTog.dataset.detailsToggle = "false";
  }
});
