const follower = document.getElementById("follower");

let currentX = 0,
  currentY = 0;
const lerpSpeed = 0.6;
document.addEventListener("mousemove", (e) => {
  const targetX = e.clientX - 20;
  const targetY = e.clientY - 40;

  currentX += (targetX - currentX) * lerpSpeed;
  currentY += (targetY - currentY) * lerpSpeed;

  follower.style.transform = `translate(${currentX}px, ${currentY}px)`;
});
