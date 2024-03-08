const canzone = document.getElementById("prova");

// Creazione card dinamica
// Creazione card dinamica
function createCard(nameArtist, description) {
  canzone.innerHTML += `
  <div class="d-flex align-items-center" id="canzone">
  <div class="col-1 d-none d-md-inline text-center text-light">1</div>
  <div class="col-5 text-start text-light">
    <strong>${nameArtist} • intro </strong>
    <p class="monospace fw-lighter m-0">${description}</p>
  </div>
  <div class="col-3 text-start text-light d-none d-md-flex justify-content-center">684.519</div>
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
      console.log(artist);
      //   const image = artist.picture;
      const nameArtist = artist.name;
      const description = artist.type;
      createCard(nameArtist, description);
    })
    .catch((error) => console.log(`Errore: ${error}`));
};

window.onload = () => {
  for (let i = 0; i < 6; i++) {
    let artistId = Math.floor(Math.random() * 900);
    home(artistId);
  }
};
