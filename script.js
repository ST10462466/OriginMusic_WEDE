// ====== EQUIRY/SERVICE FORM FUNCTIONALITY ======
document.addEventListener("DOMContentLoaded", () => {
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const service = document.getElementById("service").value;
      const date = document.getElementById("date").value;
      if (!name || !email || !service || !date) {
        alert("Please fill in all required fields.");
        return;
      }
      let responseText = "";
      switch (service) {
        case "repair":
          responseText = `Hi ${name}, our repair assistance is available on ${date}.`;
          break;
        case "rentals":
          responseText = `Thank you ${name} for your interest in our rentals services! We will email you shortly to give you more info.`;
          break;
      }
      document.getElementById("enquiryResponse").textContent = responseText;
    });
  }
  // Reference:Bulbulia, Z. (2025) Community_Outreach_Website.zip. Varsity College, WEDE5020, [14 October 2025]

  // ====== CONTACT FORM FUNCTIONALITY ======
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
      // Implementation of a reguar expression(regex) to give the pattern that 
      // the user's email should follow to be valideted 
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
// Reference:Bulbulia, Z. (2025) Community_Outreach_Website.zip. Varsity College, WEDE5020, [14 October 2025]

// ====== DYNAMIC SEARCH BAR ======
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const productContainers = document.querySelectorAll('.products');
// Function to filter and sort products
function filterAndSortProducts() {
  const query = searchInput.value.toLowerCase();
  const sortValue = sortSelect.value;

  productContainers.forEach(container => {
    // Convert NodeList to array for sorting
    const items = Array.from(container.querySelectorAll('.product-item'));
    // Filter items based on search
    const filtered = items.filter(item => {
      const name = item.querySelector('.product-name').textContent.toLowerCase();
      return name.includes(query);
    });
    
    // Sort items
    filtered.sort((a, b) => {
      const nameA = a.querySelector('.product-name').textContent.toLowerCase();
      const nameB = b.querySelector('.product-name').textContent.toLowerCase();
      const priceA = parseFloat(a.querySelector('.product-price').textContent.replace(/[R$,]/g, ''));
      const priceB = parseFloat(b.querySelector('.product-price').textContent.replace(/[R$,]/g, ''));

      if (sortValue === 'name-asc') return nameA.localeCompare(nameB);
      if (sortValue === 'name-desc') return nameB.localeCompare(nameA);
      if (sortValue === 'price-asc') return priceA - priceB;
      if (sortValue === 'price-desc') return priceB - priceA;
      return 0;
    });
     // Clear container and append filtered items
    container.innerHTML = '';
    if (filtered.length > 0) {
      filtered.forEach(item => container.appendChild(item));
      container.style.display = 'flex'; // restore display
    } else {
      // Show a "no products found" message
      const msg = document.createElement('p');
      msg.textContent = 'No matching products found.';
      msg.className = 'no-products';
      container.appendChild(msg);
      container.style.display = 'block';
    }
  });
}
/* Reference: Available at: https://chatgpt.com/c/690797da-6244-8326-949c-d93eb4ad9b42 [Accessed 1st November 2025]*/

// Event listeners
searchInput.addEventListener('input', filterAndSortProducts);
sortSelect.addEventListener('change', filterAndSortProducts);
// Reference:Bulbulia, Z. (2025) SamplePOE.zip. Varsity College, WEDE5020, [22 October 2025]
// Reference: Available at: https://chatgpt.com/c/69065a74-99bc-8326-acd7-15b51451efbf [Accessed 1st November 2025]

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
// Reference:Bulbulia, Z. (2025) Community_Outreach_Website_Gallery.zip. Varsity College, WEDE5020, [14 October 2025]
// Reference: Available at: https://chatgpt.com/c/690105b6-dbb8-832a-9eed-1734547da14c[Accessed 1st November 2025]//



