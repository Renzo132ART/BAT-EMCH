let currentImageIndex = 0;
let currentImages = [];

function openFullscreen(clickedImg) {
  currentImages = Array.from(clickedImg.parentNode.querySelectorAll('img'));
  currentImageIndex = currentImages.indexOf(clickedImg);

  createOverlay();
  showImage(currentImageIndex);
}

function createOverlay() {
  const oldOverlay = document.getElementById("fullscreenOverlay");
  if (oldOverlay) oldOverlay.remove();

  const overlay = document.createElement('div');
  overlay.id = "fullscreenOverlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "1000";
  overlay.style.overflow = "hidden";

  const img = document.createElement('img');
  img.id = "fullscreenImage";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "80%";
  img.style.borderRadius = "10px";
  img.style.transition = "opacity 0.4s ease-in-out";
  overlay.appendChild(img);

  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = "&times;";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "20px";
  closeBtn.style.right = "30px";
  closeBtn.style.fontSize = "3rem";
  closeBtn.style.color = "#fff";
  closeBtn.style.cursor = "pointer";
  closeBtn.onclick = () => {
    overlay.remove();
    // MOSTRAR DE NUEVO EL REPRODUCTOR cuando cierren la imagen
    const audioPlayer = document.querySelector('.audio-player-fixed');
    if (audioPlayer) {
      audioPlayer.style.display = 'flex';
    }
  };
  overlay.appendChild(closeBtn);

  const leftBtn = document.createElement('span');
  leftBtn.innerHTML = "&#10094;";
  leftBtn.style.position = "absolute";
  leftBtn.style.top = "50%";
  leftBtn.style.left = "20px";
  leftBtn.style.fontSize = "3rem";
  leftBtn.style.color = "#fff";
  leftBtn.style.cursor = "pointer";
  leftBtn.style.userSelect = "none";
  leftBtn.style.transform = "translateY(-50%)";
  leftBtn.onclick = () => changeImage(-1);
  overlay.appendChild(leftBtn);

  const rightBtn = document.createElement('span');
  rightBtn.innerHTML = "&#10095;";
  rightBtn.style.position = "absolute";
  rightBtn.style.top = "50%";
  rightBtn.style.right = "20px";
  rightBtn.style.fontSize = "3rem";
  rightBtn.style.color = "#fff";
  rightBtn.style.cursor = "pointer";
  rightBtn.style.userSelect = "none";
  rightBtn.style.transform = "translateY(-50%)";
  rightBtn.onclick = () => changeImage(1);
  overlay.appendChild(rightBtn);

  // Permitir cerrar también haciendo clic fuera de la imagen
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
      // MOSTRAR DE NUEVO el reproductor si cierran tocando el fondo
      const audioPlayer = document.querySelector('.audio-player-fixed');
      if (audioPlayer) {
        audioPlayer.style.display = 'flex';
      }
    }
  });

  // 🔵 OCULTAR EL REPRODUCTOR DE AUDIO mientras la imagen esté fullscreen
  const audioPlayer = document.querySelector('.audio-player-fixed');
  if (audioPlayer) {
    audioPlayer.style.display = 'none';
  }

  // Finalmente agregamos el overlay al body
  document.body.appendChild(overlay);
}


function showImage(index) {
  const fullscreenImage = document.getElementById("fullscreenImage");
  fullscreenImage.style.opacity = "0";
  fullscreenImage.src = currentImages[index].src;

  setTimeout(() => {
    fullscreenImage.style.opacity = "1";
  }, 100);
}

function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = currentImages.length - 1;
  } else if (currentImageIndex >= currentImages.length) {
    currentImageIndex = 0;
  }

  showImage(currentImageIndex);
}

// Reproductor: Toggle play/pause
function toggleReproductor() {
  const audio = document.getElementById("reproductorAudio");
  const btn = document.getElementById("reproBtn");
  if (audio.paused) {
    audio.play();
    btn.innerHTML = "⏸";
  } else {
    audio.pause();
    btn.innerHTML = "▶";
  }
}

// Control de volumen
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("reproductorAudio");
  const volumeSlider = document.getElementById("volumeSlider");

  if (volumeSlider) {
    volumeSlider.addEventListener("input", () => {
      audio.volume = volumeSlider.value;
    });
  }
});
function dispararCañones() {
  reproducirSonidoCañon();

  crearBala(-200, -200); // Disparo hacia arriba-izquierda
  crearBala(200, -200);  // Disparo hacia arriba-derecha
}

function crearBala(dx, dy) {
  const bala = document.createElement('div');
  bala.className = 'bala';
  bala.style.left = '50%'; // Centro de la pantalla (ajustable)
  bala.style.top = '30%';  // Ajusta según donde esté el cañón
  bala.style.setProperty('--dx', dx + 'px');
  bala.style.setProperty('--dy', dy + 'px');

  document.body.appendChild(bala);

  // Eliminar la bala después de que termine la animación
  bala.addEventListener('animationend', () => {
    bala.remove();
  });
}

function reproducirSonidoCañon() {
  var audio = document.getElementById('audioDisparo');
  if (audio) {
    audio.currentTime = 0; // Reinicia el sonido al principio
    audio.play().catch(error => {
      console.log('Error al intentar reproducir el sonido: ', error);
    });
  }
}


