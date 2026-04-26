const stickers = ["⭐", "🌈", "🐱", "🚀", "🍕", "🦄"];

function start() {
  alert("Let's play with stickers!");
}

const gallery = document.getElementById("gallery");

stickers.forEach(s => {
  const div = document.createElement("div");
  div.className = "sticker";
  div.textContent = s;
  gallery.appendChild(div);
});
