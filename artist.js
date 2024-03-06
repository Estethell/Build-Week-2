const url = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

// const artistId = new URLSearchParams(window.location.search).get("id");

const artistId = 55;

const artFetch = (artistId) => {
  fetch(url + artistId, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore!");
      }
    })
    .then((artist) => {
      console.log(artist);
      document.querySelector(".nomeArtista").innerText = artist.name;
      const heroDiv = document.querySelector(".heroDiv");
      heroDiv.style.backgroundImage = "url('${artist')";
    })
    .catch((errore) => console.log(errore));
};

window.onload = () => {
  artFetch(artistId);
};
