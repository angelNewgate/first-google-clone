const searchGoogle = () => {
  let input = document.getElementById("search-input").value;
  window.location.href = `https://www.google.com/search?q=${input}`;
}

const rickroll = () => {
  window.location.href = `https://youtu.be/dQw4w9WgXcQ`;
}