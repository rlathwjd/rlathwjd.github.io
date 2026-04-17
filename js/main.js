const content = document.getElementById("content");
const yearMenu = document.getElementById("year-menu");
const homeLink = document.getElementById("home-link");
const pageLinks = document.querySelectorAll("[data-page]");
const yearLinks = document.querySelectorAll("[data-year]");

const albumItems = [
  "Perfect",
  "loves",
  "Summer Episodes",
  "The Island Kid",
  "Staying",
  "Nerdy Love",
  "harry",
  "HALO"
];

const photoItems = [
  { title: "Photo 1", image: "images/축구복.JPG" },
  { title: "Photo 2", image: "images/하트.jpg" },
  { title: "Photo 3", image: "images/차.JPG" },
  { title: "Photo 4", image: "images/스토리.jpg" },
  { title: "Photo 5", image: "images/인스타.jpg" },
  { title: "Photo 6", image: "images/눈1.jpg" },
  { title: "Photo 7", image: "images/눈2.jpg" },
  { title: "Photo 8", image: "images/강아지.jpg" }
];

const careerData = {
  "2016": [
    { title: "Wavy", date: "10/21", image: "images/Killing Verse.JPG" },
    { title: "Perfect", date: "11/29", image: "images/X.jpg" }
  ],
  "2017": [
    { title: "Release A", date: "03/12", image: "images/X.jpg" }
  ],
  "2018": [
    { title: "Release B", date: "07/01", image: "images/Killing Verse.JPG" }
  ],
  "2019": [
    { title: "Release C", date: "08/28", image: "images/X.jpg" }
  ],
  "2020": [
    { title: "Release D", date: "01/15", image: "images/Killing Verse.JPG" }
  ]
};

function renderHome() {
  yearMenu.classList.add("hidden");

  content.innerHTML = `
    <h2 class="page-title">hello</h2>
    <div class="intro-text">
      welcome<br>
      welcome<br>
      welcome<br>
      welcome<br>
      welcome<br>
      welcome<br>
      welcome<br>
      welcome<br>
      welcome<br>
      welcome<br>
      welcome<br>
      welcome
    </div>
  `;
}

function renderAlbum() {
  yearMenu.classList.add("hidden");

  const cards = albumItems.map(name => `
  <div class="card">
    <img src="images/${name}.jpg" alt="${name}">
    <div class="card-label">${name}</div>
  </div>
`).join("");

  content.innerHTML = `
    <h2 class="page-title">Album</h2>
    <div class="card-grid">
      ${cards}
    </div>
  `;
}

function renderPhoto() {
  yearMenu.classList.add("hidden");

  const cards = photoItems.map(item => `
    <div class="card">
      <img src="${item.image}">
    </div>
  `).join("");

  content.innerHTML = `
    <h2 class="page-title">Photo</h2>
    <div class="card-grid">
      ${cards}
    </div>
  `;
}

function renderCareer(year = "2016") {
  yearMenu.classList.remove("hidden");

  const items = careerData[year] || [];

  const cards = items.map(item => `
    <div class="card">
      <img src="${item.image}" alt="${item.title}">
      <div class="card-label">${item.title}</div>
      <div class="card-label">${item.date}</div>
    </div>
  `).join("");

  content.innerHTML = `
    <h2 class="page-title">${year}</h2>
    <div class="card-grid">
      ${cards}
    </div>
  `;
}

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  renderHome();
});

pageLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.dataset.page;

    if (page === "album") renderAlbum();
    if (page === "photo") renderPhoto();
    if (page === "career") renderCareer();
  });
});

yearLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    renderCareer(link.dataset.year);
  });
});

renderHome();