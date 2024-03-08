const rows = document.getElementById("row1");
const rows2 = document.getElementById("row2");

// Creazione card dinamica
function createCard(image, title, description) {
  const col = document.createElement("div");
  col.className = "col-6 col-xl-2 col-md-4";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const img = document.createElement("img");
  img.className = "card-img prova";
  img.src = image;

  cardDiv.appendChild(img);
  const cardBody = document.createElement("div");
  cardBody.className = "card-body m-0 prova2";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title pb-0";
  cardTitle.textContent = title;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = description;
  cardBody.appendChild(cardText);

  cardDiv.appendChild(cardBody);
  col.appendChild(cardDiv);
  rows.appendChild(col);
}

const home = (artistId) => {
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
      createCard(image, title, description);
    })
    .catch((error) => console.log(`Errore: ${error}`));
};

window.onload = () => {
  for (let i = 0; i < 6; i++) {
    let artistId = Math.floor(Math.random() * 900);
    home(artistId, rows2);
  }
};
