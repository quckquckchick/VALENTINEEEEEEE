// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});


// Photo Slideshow Configuration
const photos = [
    "IMG_1.JPG",  
    "IMG_5027.JPG",
    "IMG_4998.JPG",
    "IMG_C.jpg",
    "IMG_4314.JPG",
    "IMG_5028.JPG",
    "IMG_4310.JPG",
    "IMG_1770.JPG",
    "IMG_V.JPG",
    "IMG_4305.JPG",
    "IMG_4857.JPG",
    "IMG_4300.JPG",
    "IMG_B.jpg",
    "IMG_4295.JPG",
    "IMG_P.jpg",
    "IMG_4291.JPG",
    "IMG_1772.JPG",
    "IMG_A.jpg",
    "IMG.gif"
  ];
  
  let idleTimer = null;
  let slideshowInterval = null;
  let currentPhotoIndex = 0;
  const IDLE_TIME = 3000; // 3 seconds
  const PHOTO_DURATION = 3000; // 3 seconds per photo
  
  const photoSlideshow = document.getElementById("photo-slideshow");
  const slideshowImg = document.getElementById("slideshow-img");
  const closeSlideshow = document.getElementById("close-slideshow");
  
  // Reset idle timer on mouse movement
  function resetIdleTimer() {
    // Clear existing timer
    clearTimeout(idleTimer);
    
    // Stop slideshow if it's running
    stopSlideshow();
    
    // Start new idle timer
    idleTimer = setTimeout(startSlideshow, IDLE_TIME);
  }
  
  // Start the slideshow
  function startSlideshow() {
    if (photos.length === 0) return;
    
    currentPhotoIndex = 0;
    photoSlideshow.style.display = "flex";
    showPhoto(currentPhotoIndex);
    
    // Change photo every 3 seconds
    slideshowInterval = setInterval(() => {
      currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
      showPhoto(currentPhotoIndex);
    }, PHOTO_DURATION);
  }
  
  // Display a specific photo
  function showPhoto(index) {
    slideshowImg.style.animation = "none";
    setTimeout(() => {
      slideshowImg.src = photos[index];
      slideshowImg.style.animation = "zoomIn 0.5s ease";
    }, 10);
  }
  
  // Stop the slideshow
  function stopSlideshow() {
    clearInterval(slideshowInterval);
    photoSlideshow.style.display = "none";
    slideshowInterval = null;
  }
  
  // Event listeners for mouse movement
  document.addEventListener("mousemove", resetIdleTimer);
  document.addEventListener("mousedown", resetIdleTimer);
  document.addEventListener("keypress", resetIdleTimer);
  document.addEventListener("scroll", resetIdleTimer);
  document.addEventListener("touchstart", resetIdleTimer);
  
  // Close button
  closeSlideshow.addEventListener("click", () => {
    stopSlideshow();
    resetIdleTimer();
  });
  
  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && photoSlideshow.style.display === "flex") {
      stopSlideshow();
      resetIdleTimer();
    }
  });
  
  // Start the idle timer when page loads
  resetIdleTimer();s
