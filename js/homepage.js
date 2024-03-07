const card = document.querySelector(".card");
const img = document.querySelectorAll(".imgc");

const home = (artistId) => {
  const url = `https://striveschool-api.herokuapp.com/api/deezer/album/${artistId}`;
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella richiesta");
      }
    })
    .then((albums) => {
      const card = document.createElement("card");
      card.classListAdd(card);

      console.log(albums);
    })
    .catch((error) => console.log(`Errore: ${error}`));
};

window.onload = () => {
  const artistId = Math.floor(Math.random() * 900);
  home(artistId);
};
