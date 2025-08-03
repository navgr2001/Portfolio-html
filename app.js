const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})

// // Focus the project card closest to the viewport center (robust & smooth)
// (function () {
//   const cards = Array.from(document.querySelectorAll('.my-project .project-card'));
//   if (!cards.length) return;

//   const vhCenter = () => window.innerHeight / 2;

//   let ticking = false;
//   function updateFocus() {
//     ticking = false;

//     let best = null;
//     let bestDist = Infinity;

//     const centerY = vhCenter();

//     cards.forEach(card => {
//       const r = card.getBoundingClientRect();
//       const cardCenter = r.top + r.height / 2;

//       // Only consider cards intersecting the viewport at least a bit
//       const intersects = r.bottom > 0 && r.top < window.innerHeight;

//       if (intersects) {
//         const dist = Math.abs(cardCenter - centerY);
//         if (dist < bestDist) {
//           bestDist = dist;
//           best = card;
//         }
//       }
//     });

//     // If none intersect (edge cases), just pick the one with smallest distance anyway
//     if (!best) {
//       cards.forEach(card => {
//         const r = card.getBoundingClientRect();
//         const cardCenter = r.top + r.height / 2;
//         const dist = Math.abs(cardCenter - centerY);
//         if (dist < bestDist) {
//           bestDist = dist;
//           best = card;
//         }
//       });
//     }

//     // Apply .in-view to exactly one card; pause/play its video
//     cards.forEach(card => {
//       const isActive = card === best;
//       card.classList.toggle('in-view', isActive);

//       const v = card.querySelector('video');
//       if (v) {
//         try { isActive ? v.play() : v.pause(); } catch (_) {}
//       }
//     });
//   }

//   function onScrollOrResize() {
//     if (!ticking) {
//       ticking = true;
//       requestAnimationFrame(updateFocus);
//     }
//   }

//   // Initial run + listeners
//   updateFocus();
//   window.addEventListener('scroll', onScrollOrResize, { passive: true });
//   window.addEventListener('resize', onScrollOrResize);
// })();
