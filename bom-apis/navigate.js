const resources = [
  "/pages/page1.html",
  "/pages/page2.html",
  "/pages/page3.html",
  "/pages/page4.html",
  "/pages/page5.html",
];

function navigateToRandomPage() {
  const randomIndex = Math.floor(Math.random() * resources.length);
  location.href = resources[randomIndex];
}

function navigateBack() {
  history.back();
}

function navigateForward() {
  history.forward();
}

const historySizeEl = document.createElement("p");
historySizeEl.textContent = `history size: ${history.length}`;
document.body.append(historySizeEl);

const randomBtn = document.createElement("button");
randomBtn.textContent = "Random Page";
randomBtn.addEventListener("click", navigateToRandomPage);
document.body.append(randomBtn);

const backBtn = document.createElement("button");
backBtn.textContent = "Back";
backBtn.addEventListener("click", navigateBack);
document.body.append(backBtn);

const forwardBtn = document.createElement("button");
forwardBtn.textContent = "Forward";
forwardBtn.addEventListener("click", navigateForward);
document.body.append(forwardBtn);
