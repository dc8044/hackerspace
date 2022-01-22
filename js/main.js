function randomChr() {
  const asciiCode = Math.ceil(Math.random() * (120 - 48) + 48);
  return String.fromCharCode(asciiCode)
}

function randomizeTitle() {
  const titleElem = document.getElementById("title")
  let title = '';
  for (let i = 0; i < 6; i++) {
    title += randomChr()
  }
  titleElem.innerText = title + " SPACE"
}

randomizeTitle()
setInterval(randomizeTitle, 5000)
