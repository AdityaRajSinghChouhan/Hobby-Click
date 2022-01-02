let fullimgbox = document.getElementById("fullimg-box");
let fullimg = document.getElementById("fullimg");

function openFullImg(pic) {
  fullimgbox.style.display = "flex";
  fullimg.src = pic;
}

function closeFullImg() {
  fullimgbox.style.display = "none";
}
