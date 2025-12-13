let allMusics = [
    {duration: "4:00", songName: "Deewaniyat", url: "./songs/DEEWANIYAT.mp3", image: "https://i.pinimg.com/736x/ff/52/64/ff52645fdff71bafa0e0cf7b9688c9ed.jpg",},
    {duration: "2:27", songName: "Pal pal", url: "./songs/pal pal.mp3", image: "https://i1.sndcdn.com/artworks-TUAP2U6iDvGfdquJ-3Hzcww-t500x500.png"},
    {duration: "3:49", songName: "Ehsaas", url: "./songs/ehsaas.mp3", image: "https://i.pinimg.com/736x/03/a8/95/03a895e87df059b2509e9fc6c5db6388.jpg"},
    {duration: "2:54", songName: "Haseen", url: "./songs/haseena.mp3", image: "https://i.pinimg.com/1200x/03/57/7f/03577f31f8b012f6697e4ded8420bce7.jpg"},
    {duration: "4:38", songName: "JHOL", url: "./songs/jhol.mp3", image: "https://i.pinimg.com/736x/57/d7/e7/57d7e7407c0bfd6384e4073f20027eca.jpg"},
    {duration: "3:30", songName: "Jeene Laga hu", url: "./songs/jeene laga huu.mp3", image: "https://i.pinimg.com/736x/16/82/f8/1682f8cb537fe4a7dfc416e3a53dfd74.jpg"},
    {duration: "3:54", songName: "Man mere", url: "./songs/mann-mera.mp3", image: "https://c.saavncdn.com/475/Mann-Mera-From-Table-No-21-Lofi-Mix-Hindi-2022-20230430081844-500x500.jpg"},
    {duration: "3:44", songName: "Meri Zindigi Hai Tu", url: "./songs/meri Zindigi hai.mp3", image: "https://tse4.mm.bing.net/th/id/OIP.zk2zTzZJ2dZ09eACIWBznAHaJP?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"},
    {duration: "3:09", songName: "O Sahiba", url: "./songs/sahiba.mp3", image: "https://i.pinimg.com/736x/e1/bc/8b/e1bc8b2c63c3caf6594b29833b21db73.jpg"},
    {duration: "5:43", songName: "Saiyaara", url: "./songs/saiyaara.mp3", image: "https://i.pinimg.com/736x/19/c3/67/19c3671a40c0711507975914d0a26cfe.jpg"}
]

let allSongs = document.querySelector(".all-songs")
let poster = document.querySelector(".left")
let pLAY = document.querySelector("#play")
let backward = document.querySelector("#backward") 
let forward = document.querySelector("#forward")  
let audio = new Audio()
let selectedSong = 0

function showMusics() {
    let clutter = ""
    allMusics.forEach(function(song,idx) {
        clutter += `<div class="song-card" id="${idx}">
                    <div class="part1">
                        <img src="${song.image}" alt="">
                        <h2>${song.songName}</h2>
                    </div>
                    <h6>${song.duration}</h6>
                </div>`
    })
    allSongs.innerHTML = clutter
    audio.src = allMusics[selectedSong].url
    poster.style.backgroundImage = `url(${allMusics[selectedSong].image})`
}

showMusics()
let flag = 0
allSongs.addEventListener("click", function(det) {
    selectedSong = det.target.id
    flag = 1
    backward.style.opacity = 1
    forward.style.opacity = 1
    pLAY.innerHTML = `<i class="ri-pause-fill"></i>`
    showMusics()
    audio.play()
})

pLAY.addEventListener("click", function() {
    if(flag === 0){
        pLAY.innerHTML = `<i class="ri-pause-fill"></i>`
        audio.play()
        flag = 1
    }else{
        pLAY.innerHTML = `<i class="ri-play-fill"></i>`
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function() {
    if(selectedSong < allMusics.length - 1){
        flag = 1
        selectedSong++
        backward.style.opacity = 1  
        pLAY.innerHTML = `<i class="ri-pause-fill"></i>`
        showMusics()
        audio.play()
    }else{
        forward.style.opacity = .3
    }    
})
backward.addEventListener("click", function() {
    if(selectedSong > 0){
        flag = 1
        pLAY.innerHTML = `<i class="ri-pause-fill"></i>`
        selectedSong--
        showMusics()
        audio.play()
    }else{
        backward.style.opacity = .3
    }
})

audio.addEventListener("ended", function() {
    if(selectedSong < allMusics.length - 1){
        selectedSong++
    }else{
        selectedSong = 0
    }
    pLAY.innerHTML = `<i class="ri-pause-fill"></i>`;
    showMusics()
    audio.play()

})

// function allEvents() {
//     let flag = 0
// allSongs.addEventListener("click", function(dets) {
//     selectedSong = dets.target.id
//     flag = 1
//     backward.style.opacity = 1
//     pLAY.innerHTML = `<i class="ri-pause-fill"></i>`
//     showMusics()
//     audio.play()  
// })

// pLAY.addEventListener("click", function() {
//     if(flag === 0){
//         pLAY.innerHTML = `<i class="ri-pause-fill"></i>`
//         showMusics()
//         audio.play()
//         flag = 1
//     }else{
//         pLAY.innerHTML = `<i class="ri-play-fill"></i>`
//         audio.pause()
//         flag = 0
//     }
// })

// forward.addEventListener("click", function() {
//     if(selectedSong < allMusics.length - 1){
//         flag = 1
//         selectedSong++
//         pLAY.innerHTML = `<i class="ri-pause-fill"></i>`
//         showMusics()
//         audio.play()
//         backward.style.opacity = 1
//     }else{
//         forward.style.opacity = .3
//     }
// })

// backward.addEventListener("click", function() {
//     if(selectedSong > 0){
//         flag = 1
//         selectedSong--
//         pLAY.innerHTML = `<i class="ri-pause-fill"></i>`
//         showMusics()
//         audio.play()
//     }else{
//         backward.style.opacity = .3
//     }
// })

// audio.addEventListener("ended", function(){
//     if(selectedSong < allMusics.length -1){
//         selectedSong++
//     }else{
//         selectedSong = 0
//     }

//     pLAY.innerHTML = `<i class="ri-pause-fill"></i>`;
//     showMusics();
//     audio.play();
// })

// function formatTime(time) {
//     let minutes = Math.floor(time / 60);
//     let seconds = Math.floor(time % 60);
//     if (seconds < 10) seconds = "0" + seconds;
//     return `${minutes}:${seconds}`;
// }
// formatTime()

// audio.addEventListener("loadedmetadata", function () {
//     document.querySelector("#totalTime").innerText = formatTime(audio.duration);
//     document.querySelector("#progress").max = audio.duration;
// });

// audio.addEventListener("timeupdate", function () {
//     document.querySelector("#currentTime").innerText = formatTime(audio.currentTime);
//     document.querySelector("#progress").value = audio.currentTime;
// });

// document.querySelector("#progress").addEventListener("input", function () {
//     audio.currentTime = this.value;
// });
// }

// allEvents()