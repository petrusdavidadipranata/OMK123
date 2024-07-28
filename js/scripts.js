document.addEventListener('DOMContentLoaded', function() {
    // Tampilkan modal saat pertama kali halaman dimuat
    var welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'), {
      keyboard: false,
      backdrop: 'static' // Mencegah menutup modal saat klik di luar
    });
    welcomeModal.show();

    // Ketika tombol "Start" diklik
    document.getElementById('startButton').addEventListener('click', function() {
      // Tutup modal
      welcomeModal.hide();
      // Mainkan musik
      var music = document.getElementById('backgroundMusic');
      music.play();
    });
});


const theme_mode = document.getElementById("theme-mode");

theme_mode.addEventListener("change", () => {
  if (theme_mode.checked) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
});

const btn_menu = document.getElementById("btn-menu");
const show_nav = document.getElementById("nav-list");

btn_menu.addEventListener("change", () => {
  if (btn_menu.checked) {
    show_nav.classList.remove("hidden");
  } else {
    show_nav.classList.add("hidden");
  }
});



