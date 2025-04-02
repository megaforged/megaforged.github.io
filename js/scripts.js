const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("expandedImage");
const captionText = document.getElementById("caption");

const projectImages = document.querySelectorAll('.project-image');

projectImages.forEach(img => {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}