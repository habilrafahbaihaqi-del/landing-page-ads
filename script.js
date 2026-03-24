// --- 1. SINKRONISASI SAAT HALAMAN DIMUAT ---
document.addEventListener("DOMContentLoaded", function () {
  // A. Scroll Reveal Animation
  const reveals = document.querySelectorAll(".reveal");
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  reveals.forEach((reveal) => revealOnScroll.observe(reveal));

  // B. Setup Floating WhatsApp Button
  const waFloatingBtn = document.getElementById("wa-floating-btn");
  if (waFloatingBtn) {
    const floatingMessage =
      "Halo Merrfh Digital, saya sedang melihat website Anda dan ingin konsultasi mengenai pembuatan website.";
    waFloatingBtn.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(floatingMessage)}`;
  }

  // C. Jalankan fungsi harga pertama kali
  updatePricing();
});

// --- 2. DYNAMIC PRICING LOGIC ---
const waNumber = "628970041552"; // Nomor WhatsApp Utama

const pricingData = {
  landingPage: {
    starter: {
      price: "Rp 1.499.000",
      message:
        "Halo Merrfh Digital, saya tertarik order paket *Starter* untuk pembuatan *Landing Page*.",
      features: [
        "Free Domain (.com / .id)",
        "Shared Hosting (6 Bulan)",
        "Desain Responsif (Mobile & Desktop)",
        "1 Halaman Landing Page (scroll panjang)",
        "1 Email Bisnis",
        "1 GB Disk Storage",
        "Free SSL",
        "1x Revisi Gratis",
        "Garansi Maintenance 20 Hari",
        "Video Panduan Akses Website",
      ],
      feeText:
        "*Cocok untuk bisnis baru yang ingin langsung tampil online dengan landing page.",
    },
    growth: {
      price: "Rp 1.999.000",
      message:
        "Halo Merrfh Digital, saya tertarik order paket *Growth* untuk pembuatan *Landing Page*.",
      features: [
        "Semua Fitur Starter, plus:",
        "Hosting (1 Tahun)",
        "Desain Visual Lebih Kompleks (CTA, Form, Galeri)",
        "Direct WhatsApp Chat",
        "2 Email Bisnis",
        "10 GB Disk Storage",
        "Free SSL",
        "3x Revisi Gratis",
        "SEO On-Page Basic",
        "Garansi Maintenance 1 Bulan",
      ],
      feeText:
        "*Buat kamu yang pengen tampil lebih profesional dan punya kontrol lebih atas fitur & brand.",
    },
    ultimate: {
      price: "Rp 2.799.000",
      message:
        "Halo Merrfh Digital, saya tertarik order paket *Ultimate* untuk pembuatan *Landing Page*.",
      features: [
        "Semua Fitur Growth, plus:",
        "Up to 2 Halaman Tambahan (About/ FAQ / Blog Preview)",
        "Premium Copywriting (High Conversion)",
        "Setup Meta Pixel & Google Analytics",
        "Integrasi Form ke Email/Google Sheet",
        "Revisi Unlimited (Hingga Launching)",
        "Garansi Maintenance 2 Bulan",
      ],
      feeText:
        "*Solusi landing page all-in-one buat bisnis digital yang pengen konversi tinggi + tampil premium.",
    },
  },
  companyProfile: {
    starter: {
      price: "Rp 1.999.000",
      message:
        "Halo Merrfh Digital, saya tertarik order paket *Starter* untuk pembuatan *Company Profile*.",
      features: [
        "Free Domain (.com / .id) 1 Tahun",
        "Shared Hosting (6 Bulan)",
        "Desain Profesional & Responsif",
        "Maksimal 3 Halaman (Home, About, Contact)",
        "Formulir Kontak Langsung ke WhatsApp",
        "1 Email Bisnis",
        "2 GB Disk Storage",
        "Free SSL",
        "2x Revisi Gratis",
        "Garansi Maintenance 20 Hari",
        "Video Panduan Akses Website",
      ],
      feeText:
        "*Solusi tepat untuk membangun kredibilitas awal perusahaan di dunia digital.",
    },
    growth: {
      price: "Rp 2.999.000",
      message:
        "Halo Merrfh Digital, saya tertarik order paket *Growth* untuk pembuatan *Company Profile*.",
      features: [
        "Semua Fitur Starter, plus:",
        "Hosting (1 Tahun)",
        "Maksimal 5 Halaman (Home, About, Services, Portfolio, Contact)",
        "2 Email Bisnis",
        "Desain Premium dan Clean",
        "10 GB Disk Storage",
        "Optimasi SEO Dasar (On-Page)",
        "3x Revisi Gratis",
        "Garansi Maintenance 1 Bulan",
      ],
      feeText:
        "*Paket ideal untuk perusahaan skala menengah yang butuh profil lengkap dan tepercaya.",
    },
    ultimate: {
      price: "Rp 3.499.000",
      message:
        "Halo Merrfh Digital, saya tertarik order paket *Ultimate* untuk pembuatan *Company Profile*.",
      features: [
        "Semua Fitur Growth, plus:",
        "Halaman Unlimited*",
        "Desain Premium dengan Animasi Halus",
        "Optimasi Kecepatan Ekstra",
        "3 Email Bisnis",
        "5x Revisi Gratis",
        "Garansi Maintenance 2 Bulan",
      ],
      feeText:
        "*Representasi digital terbaik dengan fitur sangat lengkap untuk korporasi berskala besar.",
    },
  },
};

function updatePricing() {
  const type = document.getElementById("web-type").value;
  const data = pricingData[type];

  // Update Harga
  document.getElementById("price-starter").innerText = data.starter.price;
  document.getElementById("price-growth").innerText = data.growth.price;
  document.getElementById("price-ultimate").innerText = data.ultimate.price;

  // Update Link WhatsApp
  document.getElementById("wa-starter").href =
    `https://wa.me/${waNumber}?text=${encodeURIComponent(data.starter.message)}`;
  document.getElementById("wa-growth").href =
    `https://wa.me/${waNumber}?text=${encodeURIComponent(data.growth.message)}`;
  document.getElementById("wa-ultimate").href =
    `https://wa.me/${waNumber}?text=${encodeURIComponent(data.ultimate.message)}`;

  // Update Fitur
  const renderFeatures = (featuresArray) => {
    return featuresArray
      .map((feature) => `<li><i class="fa-solid fa-check"></i> ${feature}</li>`)
      .join("");
  };
  document.getElementById("features-starter").innerHTML = renderFeatures(
    data.starter.features,
  );
  document.getElementById("features-growth").innerHTML = renderFeatures(
    data.growth.features,
  );
  document.getElementById("features-ultimate").innerHTML = renderFeatures(
    data.ultimate.features,
  );

  // Update Teks Bawah Tombol (Fee Text)
  document.getElementById("fee-starter").innerText = data.starter.feeText;
  document.getElementById("fee-growth").innerText = data.growth.feeText;
  document.getElementById("fee-ultimate").innerText = data.ultimate.feeText;
}

// --- 3. FAQ ACCORDION LOGIC ---
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) otherItem.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

// --- 4. SCROLLSPY (ACTIVE NAVBAR LINK) ---
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section[id]");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (current && link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// --- 5. ANIMASI NUMBER COUNTER ---
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const text = counter.innerText;
  const target = parseInt(text.replace(/[^0-9]/g, ""));
  const suffix = text.replace(/[0-9]/g, "");

  counter.setAttribute("data-target", target);
  counter.setAttribute("data-suffix", suffix);
  counter.innerText = "0" + suffix;
});

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        const suffix = counter.getAttribute("data-suffix");

        const updateCount = () => {
          const currentCount = +counter.innerText.replace(/[^0-9]/g, "");
          const increment = target / 40;

          if (currentCount < target) {
            counter.innerText = Math.ceil(currentCount + increment) + suffix;
            setTimeout(updateCount, 40);
          } else {
            counter.innerText = target + suffix;
          }
        };

        updateCount();
        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// --- 6. TRACKING KONVERSI META PIXEL (LEAD WHATSAPP) ---
// Mencari semua tombol link yang mengarah ke wa.me
const allWaButtons = document.querySelectorAll('a[href*="wa.me"]');

allWaButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Memastikan script fbq (Meta Pixel) sudah aktif di halaman
    if (typeof fbq === "function") {
      // Mengirim laporan ke Facebook bahwa ada "Lead" baru masuk
      fbq("track", "Lead");
    }
  });
});

// --- 7. EFEK TYPEWRITER (TEKS BERGANTIAN DI HERO) ---
const words = ["Landing Page", "Company Profile"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById("typewriter-text");

function typeWriterEffect() {
  const currentWord = words[wordIndex];

  // Jika sedang menghapus, kurangi karakter. Jika tidak, tambah karakter.
  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Atur kecepatan ketik (lebih cepat saat menghapus)
  let typeSpeed = isDeleting ? 50 : 100;

  // Jika kata sudah selesai diketik semua
  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; // Jeda 2 detik sebelum mulai menghapus
    isDeleting = true;
  }
  // Jika kata sudah selesai dihapus semua
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Pindah ke kata selanjutnya
    typeSpeed = 500; // Jeda setengah detik sebelum mulai mengetik kata baru
  }

  setTimeout(typeWriterEffect, typeSpeed);
}

// Jalankan animasi saat file siap
if (typewriterElement) {
  typeWriterEffect();
}
