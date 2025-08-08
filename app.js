// Splash screen logic
document.addEventListener("DOMContentLoaded", function () {
  const splash = document.getElementById("splash");
  const mainContent = document.getElementById("main-content");
  const typingText = document.getElementById("typing-text");

  const fullText = "Accessing Naveen's Portfolio System...";
  let index = 0;

  function type() {
    if (index < fullText.length) {
      typingText.textContent += fullText.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }

  type();

  // Hide splash screen after delay
  setTimeout(() => {
    splash.style.opacity = 0;
    splash.style.pointerEvents = "none";
    setTimeout(() => {
      splash.style.display = "none";
      mainContent.style.display = "block";
    }, 500);
  }, 4000);

  // MATRIX RAIN EFFECT
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const katakana = "アカサタナハマヤラワ0123456789";
  const letters = katakana.split("");
  const fontSize = 16;
  const columns = canvas.width / fontSize;

  const drops = Array.from({ length: columns }).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(drawMatrix, 33);

  // Resize canvas if window changes
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});



const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
    video.addEventListener("mouseover", function () {
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function () {
        video.pause();
        hoverSign.classList.remove("active")
    })
})

// Sidebar elements //
menu.addEventListener("click", function () {
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");

})



function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_fdwz8ig", "template_81db644", parms).then(alert("Email sent...!"))
}

