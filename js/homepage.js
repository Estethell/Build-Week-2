const url = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
const artistId = Math.floor(Math.random() * 900);
const card = document.querySelector(".card");
const img = document.querySelectorAll(".imgc");

const home = (url) => {
  fetch(url + artistId, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella richiesta");
      }
    })
    .then((artist) => {
      img.for;
    })
    .catch((error) => console.log(`Errore: ${error}`));
};
window.onload = () => {
  home(artistId);
};
