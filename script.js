// Filter kategori foto di galeri
const filterButtons = document.querySelectorAll(".filter-button");
const galleryCards = document.querySelectorAll(".gallery-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Tandai tombol yang sedang dipilih
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.filter;

    // Tampilkan semua foto atau hanya kategori terpilih
    galleryCards.forEach((card) => {
      const matches = selectedCategory === "all" ||
        card.dataset.category === selectedCategory;
      card.hidden = !matches;
    });
  });
});

// Lightbox: klik foto untuk melihat versi lebih besar
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCategory = document.getElementById("lightboxCategory");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".image-button").forEach((button) => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = button.dataset.title;
    lightboxTitle.textContent = button.dataset.title;
    lightboxCategory.textContent = button.dataset.categoryLabel;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);

// Tutup saat area gelap diklik atau tombol Escape ditekan
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

// Menu navigasi untuk layar HP
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Tahun footer otomatis mengikuti tahun saat ini
document.getElementById("year").textContent = new Date().getFullYear();
