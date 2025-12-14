const allMusics = [
    { songName: "Deewaniyat", duration: "4:00", url: "./songs/DEEWANIYAT.mp3", image: "https://i.pinimg.com/736x/ff/52/64/ff52645fdff71bafa0e0cf7b9688c9ed.jpg" },
    { songName: "Pal pal", duration: "2:27", url: "./songs/pal pal.mp3", image: "https://i1.sndcdn.com/artworks-TUAP2U6iDvGfdquJ-3Hzcww-t500x500.png" },
    { songName: "Ehsaas", duration: "3:49", url: "./songs/ehsaas.mp3", image: "https://i.pinimg.com/736x/03/a8/95/03a895e87df059b2509e9fc6c5db6388.jpg" },
    { songName: "Haseen", duration: "2:54", url: "./songs/haseena.mp3", image: "https://i.pinimg.com/1200x/03/57/7f/03577f31f8b012f6697e4ded8420bce7.jpg" },
    { songName: "JHOL", duration: "4:38", url: "./songs/jhol.mp3", image: "https://i.pinimg.com/736x/57/d7/e7/57d7e7407c0bfd6384e4073f20027eca.jpg" },
    { songName: "Jeene Laga hu", duration: "3:30", url: "./songs/jeene laga huu.mp3", image: "https://i.pinimg.com/736x/16/82/f8/1682f8cb537fe4a7dfc416e3a53dfd74.jpg" },
    { songName: "Man mere", duration: "3:54", url: "./songs/mann-mera.mp3", image: "https://c.saavncdn.com/475/Mann-Mera-From-Table-No-21-Lofi-Mix-Hindi-2022-20230430081844-500x500.jpg" },
    { songName: "Meri Zindigi Hai Tu", duration: "3:44", url: "./songs/meri Zindigi hai.mp3", image: "https://tse4.mm.bing.net/th/id/OIP.zk2zTzZJ2dZ09eACIWBznAHaJP" },
    { songName: "O Sahiba", duration: "3:09", url: "./songs/sahiba.mp3", image: "https://i.pinimg.com/736x/e1/bc/8b/e1bc8b2c63c3caf6594b29833b21db73.jpg" },
    { songName: "Saiyaara", duration: "5:43", url: "./songs/saiyaara.mp3", image: "https://i.pinimg.com/736x/19/c3/67/19c3671a40c0711507975914d0a26cfe.jpg" }
];

const allSongs = document.querySelector(".all-songs");
const poster = document.querySelector(".left");
const playBtn = document.querySelector("#play");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const progress = document.querySelector("#progress");
const currentTimeEl = document.querySelector("#currentTime");
const totalTimeEl = document.querySelector("#totalTime");

const audio = new Audio();
let selectedSong = 0;

function renderSongs() {
    allSongs.innerHTML = allMusics.map((song, idx) => `
        <div class="song-card" data-id="${idx}">
            <div class="part1">
                <img src="${song.image}">
                <h2>${song.songName}</h2>
            </div>
            <h6>${song.duration}</h6>
        </div>
    `).join("");
}

function loadSong(index) {
    selectedSong = index;
    audio.src = allMusics[index].url;
    poster.style.backgroundImage = `url(${allMusics[index].image})`;
}

function playSong() {
    audio.play();
    playBtn.innerHTML = `<i class="ri-pause-fill"></i>`;
}

function pauseSong() {
    audio.pause();
    playBtn.innerHTML = `<i class="ri-play-fill"></i>`;
}

function formatTime(time = 0) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60)
    if (sec < 10) sec = "0" + sec
    return `${min}:${sec}`;
}

renderSongs();
loadSong(selectedSong);

allSongs.addEventListener("click", e => {
    const card = e.target.closest(".song-card");
    if (!card) return;
    loadSong(+card.dataset.id);
    playSong();
    backward.style.opacity = 1;
    forward.style.opacity = 1;
});

playBtn.addEventListener("click", () => {
    audio.paused ? playSong() : pauseSong();
});

forward.addEventListener("click", () => {
    if (selectedSong < allMusics.length - 1) {
        loadSong(selectedSong + 1);
        playSong();
    }
});

backward.addEventListener("click", () => {
    if (selectedSong > 0) {
        loadSong(selectedSong - 1);
        playSong();
    }
});

audio.addEventListener("ended", () => {
    loadSong((selectedSong + 1) % allMusics.length);
    playSong();
});

audio.addEventListener("loadedmetadata", () => {
    totalTimeEl.innerText = formatTime(audio.duration);
    progress.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
    currentTimeEl.innerText = formatTime(audio.currentTime);
    progress.value = audio.currentTime;
});

progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});
