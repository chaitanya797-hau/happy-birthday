// Small sparkle effect

setInterval(() => {

  const sparkle = document.createElement("div");

  sparkle.innerHTML = "✨";

  sparkle.style.position = "fixed";

  sparkle.style.left = Math.random() * window.innerWidth + "px";

  sparkle.style.top = Math.random() * window.innerHeight + "px";

  sparkle.style.fontSize = "20px";

  sparkle.style.pointerEvents = "none";

  sparkle.style.animation = "fade 2s linear";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2000);

}, 300);

const style = document.createElement('style');

style.innerHTML = `
@keyframes fade {
  0% {
    opacity:1;
    transform:scale(1);
  }

  100% {
    opacity:0;
    transform:scale(2);
  }
}
`;

document.head.appendChild(style);