// ====== CONTACT FORM FUNCTIONALITY ======
document.addEventListener("DOMContentLoaded", () => {
const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const type = document.getElementById("mtype").value;
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !type || !message) {
        alert("Please complete all fields.");
        return;
      }
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
      }
      setTimeout(() => {
        document.getElementById("Response").textContent =
          `Thank you ${name}, your ${type} message has been sent successfully!`;
      }, 1000);
    });
  }
});
// ====== GALLERY LIGHTBOX FUNCTIONALITY ======
const galleryImages = document.querySelectorAll(".products-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
if (galleryImages.length > 0) {
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      currentIndex = index;
    });
  });
}
// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
// Navigate images
function showImage(index) {
  if (index >= galleryImages.length) index = 0;
  if (index < 0) index = galleryImages.length - 1;
  lightboxImg.src = galleryImages[index].src;
  currentIndex = index;
}
nextBtn.addEventListener("click", () => showImage(currentIndex + 1));
prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
// Close on background click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
}); 




