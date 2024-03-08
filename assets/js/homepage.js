const row = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const row4 = document.getElementById("row4");

function createcardsx(image, titolo, description) {
  const body = document.getElementById("box2");
  const row = document.createElement("div");
  const col = document.createElement("div");
  /* 
  row.className = "row col-12 align-items-center mb-3";
  col.className = "col-2"; */

  const img = document.createElement("img");
  img.className = "card-img prova";
  img.src = image;
  img.style.width = "20%";
  img.style.height = "20%";
  body.appendChild(row);
  row.appendChild(col);
  col.appendChild(img);
  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title ";
  cardTitle.textContent = titolo;
  row.appendChild(cardTitle);
}
// Creazione card dinamica dx
function createCard(image, title, description, row) {
  const col = document.createElement("div");
  col.className = "col-6 col-xl-2 col-md-4";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style.height = "252px";

  const img = document.createElement("img");
  img.className = "card-img prova";
  img.src = image;

  cardDiv.appendChild(img);
  const cardBody = document.createElement("div");
  cardBody.className = "card-body m-0 prova2";

  const cardTitle = document.createElement("p");
  cardTitle.className = "card-title pb-0";
  cardTitle.textContent = title;
  cardDiv.appendChild(cardTitle);
  cardTitle.style.paddingTop = "20px";

  cardDiv.appendChild(cardBody);
  col.appendChild(cardDiv);
  row.appendChild(col);
}

const home = (artistId, row) => {
  const url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistId}`;
  fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc1411bb79msh7fda284dd2f7bdcp11ace5jsnd42d9d71ed13",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella richiesta");
      }
    })
    .then((artist) => {
      const image = artist.picture;
      const title = artist.name;
      const description = artist.type;
      createCard(image, title, description, row);
      createcardsx(image, title, description, row);
    })
    .catch((error) => console.log(`Errore: ${error}`));
};

window.onload = () => {
  for (let i = 0; i < 6; i++) {
    let artistId = Math.floor(Math.random() * 900);
    home(artistId, row);
    home(artistId, row2);
    home(artistId, row3);
    home(artistId, row4);
  }
};
