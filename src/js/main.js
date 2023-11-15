import "./../scss/style.scss";
import {Song} from "./Song";

const song1 = new Song("En kväll i juni", "Lasse Berghagen", "Sweden");
const song2 = new Song("Firework", "Katy Perry", "USA");
const song3 = new Song("Nessun dorma", "Luciano Pavarotti", "Italy");

let songs = [song1, song2, song3];

const createSongHtml = () => {
  const songContainer = document.getElementById("songContainer");

  songs.forEach((song) => {
    const songCard = document.createElement("div");
    const songTitle = document.createElement("h3");
    const artistTitle = document.createElement("h4");
    const countryTitle = document.createElement("p");

    songCard.id = "songCard";
    songTitle.className = "songTitle";
    artistTitle.className = "artistTitle";
    countryTitle.className = "contryTitle";

    songTitle.innerHTML = song.name;
    artistTitle.innerHTML = song.artist;
    countryTitle.innerHTML = song.country;

    songCard.appendChild(songTitle);
    songCard.appendChild(artistTitle);
    songCard.appendChild(countryTitle);
    songContainer.appendChild(songCard);
    document.body.appendChild(songContainer);
  });
};
createSongHtml();
