const canzone = document.getElementById("prova");

// Creazione card dinamica
// Creazione card dinamica
function createCard(nameArtist, description, riproduzioni, i) {
  canzone.innerHTML += `
  <div class="d-flex align-items-center" id="canzone">
  <div class="col-1 d-none d-md-inline text-center text-light">${i}</div>
  <div class="col-5 text-start text-light">
    <strong>${nameArtist} • intro </strong>
    <p class="monospace fw-lighter m-0">${description}</p>
  </div>
  <div class="col-3 text-start text-light d-none d-md-flex justify-content-center">${riproduzioni}</div>
  <div class="col-2 text-end me-3 ms-auto d-none d-md-inline opacity opacity-50">1:28</div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-three-dots-vertical text-end ms-auto d-md-none"
    viewBox="0 0 16 16"
  >
    <path
      d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
</div>`;
}
const contenutoSuperiore = document.getElementById("contenutoSuperiore");

function createCar2(nameArtist, description, riproduzioni, i) {
  contenutoSuperiore.innerHTML = `<div id="contenutoSuperiore" class="ms-3">
                  <h4 id="titolo_album" class="m-0 d-none d-md-flex">ALBUM</h4>
                  <h2 id="titoloCanzone" class="">Gioventù Brucata</h2>
                  <p class="d-none d-md-block">
                    <img class="rounded-circle" src="./assets/imgs/main/image-3.jpg" width="30" alt="" />
                    ${nameArtist} • 2017 • 12 brani,
                    <span class="">53 min 20 sec. </span>
                  </p>
                  <p class="d-block d-md-none mb-2">
                    <img class="rounded-circle me-2" src="./assets/imgs/main/image-3.jpg" width="30" alt="" />Pinguini
                    tattici nucleari
                  </p>
                  <p class="d-block d-md-none opacity-50 mb-0">Album <span>• 2017</span></p>
                </div>
              </div>`;
}
let i = 0;
const home = (artistId) => {
  const url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistId}`;
  fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d52bd1556bmshda71f6c1f7a2b47p14ba97jsndc56d619a8cf",
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
      console.log(artist);
      //   const image = artist.picture;
      const riproduzioni = Math.floor(Math.random() * 900) + "." + Math.floor(Math.random() * 900);
      const nameArtist = artist.name;
      const description = artist.type;

      i++;
      createCard(nameArtist, description, riproduzioni, i);
      createCar2(nameArtist, description, riproduzioni, i);
    })
    .catch((error) => console.log(`Errore: ${error}`));
};

window.onload = () => {
  for (let i = 0; i < 6; i++) {
    let artistId = Math.floor(Math.random() * 900);
    home(artistId);
  }
};