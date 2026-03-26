// Menjalankan script setelah seluruh elemen DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  // 1. Smooth scrolling untuk link navigasi
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Mendapatkan ID target dari atribut href (misal: #tentang)
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // Mengatur efek gulir halus (smooth scroll)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Mengurangi tinggi navbar agar judul tidak tertutup
          behavior: "smooth",
        });
      }
    });
  });

  // 2. Menambahkan efek interaktif pada header saat di-scroll
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
      header.style.padding = "10px 5%"; // Sedikit menyusut saat di-scroll
    } else {
      header.style.boxShadow = "none";
      header.style.padding = "15px 5%";
    }
  });

  // 3. Efek Hover Berwarna pada Kartu Proyek (opsional)
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      if (card.classList.contains("pink-border")) {
        card.style.borderColor = "transparent";
        card.style.background =
          "linear-gradient(135deg, #ffffff 0%, #fdf2f8 100%)";
      } else if (card.classList.contains("purple-border")) {
        card.style.borderColor = "transparent";
        card.style.background =
          "linear-gradient(135deg, #ffffff 0%, #ede9fe 100%)";
      } else if (card.classList.contains("teal-border")) {
        card.style.borderColor = "transparent";
        card.style.background =
          "linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)";
      }
    });

    card.addEventListener("mouseleave", () => {
      // Mengembalikan ke state awal
      card.style.background = "#ffffff";
      if (card.classList.contains("pink-border"))
        card.style.borderColor = "var(--accent-pink)";
      if (card.classList.contains("purple-border"))
        card.style.borderColor = "var(--accent-purple)";
      if (card.classList.contains("teal-border"))
        card.style.borderColor = "var(--accent-teal)";
    });
  });
});
