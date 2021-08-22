// let cek = true;
// while (cek) {

// if (waktu() === false) {
//   alert("gagal");
// }

const awal = new Date(0).getTime();
const tujuan = new Date(300000).getTime();

let selisih = tujuan - awal;

const tStart = document.querySelector(".mulai span.tmulai");

tStart.addEventListener("click", mulai);

function mulai() {
  const sound = new Audio("lagu1.mp3");
  sound.play();
  sound.play();
  const container = document.getElementsByClassName("container");
  const h1 = document.getElementById("icon");
  const alert = document.querySelector(".alert");
  const mulai = document.querySelector(".mulai");
  mulai.style.display = "none";
  alert.style.display = "none";
  h1.classList.remove("blur");
  container[0].classList.remove("blur");
  waktu();
  // console.log(waktu());
}

function waktu() {
  const hitung = setInterval(function () {
    selisih = selisih - 1000;
    let menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    let detik = Math.floor((selisih % (1000 * 60)) / 1000);
    const getWaktu = document.querySelector(".waktu");
    getWaktu.innerHTML = menit + " : " + detik;
    if (selisih === 0) {
      clearInterval(hitung);
      // console.log("waktu habis");
      alert("Waktu Anda Habis!!!");
      alert("Score Komputer : " + kScore);
      alert("Score Player : " + pScore);
      if (kScore < pScore) {
        alert("Selamat Anda Memenangkan Game ini");
      } else {
        alert("Sayang Sekali Anda KALAH (:");
      }
      return false;
      // let cek = confirm("Mau Main Lagi?");

      // if (cek === true) {
      //   mulai();
      // }
    }

    if (detik < 10) {
      getWaktu.innerHTML = menit + " : " + "0" + detik;
    }
  }, 1000);
}

function getPilihanKomputer() {
  // Tangkap Inputan Komputer
  const komp = Math.random();

  if (komp < 0.34) return "gajah";
  if (komp >= 0.34 && komp < 0.67) return "orang";
  return "semut";
}

function getHasil(komp, player) {
  // Buat Aturan
  if (player == komp) return "SERI";
  if (player == "gajah") return komp == "semut" ? "KALAH" : "MENANG";
  if (player == "orang") return komp == "gajah" ? "KALAH" : "MENANG";
  if (player == "semut") return komp == "orang" ? "KALAH" : "MENANG";
}

function putar() {
  const imgKomputer = document.querySelector(".img-komputer");
  const info = document.querySelector(".info");
  const akomp = document.querySelector(".container div.area-komputer");
  const gambar = ["gajah", "semut", "orang"];
  const aHasil = ["MENANG", "KALAH", "SERI"];
  const wrandom = ["red", "lightgreen", "blue", "yellow", "lightblue"];
  const wak = ["red", "green", "blue", "yellow"];

  let i = 0;
  let h = 0;
  let div = 0;
  let ak = 0;
  const waktuMulai = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 2000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    info.innerHTML = aHasil[h++];
    info.style.backgroundColor = wrandom[div++];
    akomp.style.backgroundColor = wak[ak++];
    if (i === gambar.length) i = 0;
    if (h === aHasil.length) h = 0;
    if (div === wrandom.length) div = 0;
    if (ak === wak.length) ak = 0;
  }, 80);
}

const pPlayer = document.querySelectorAll(".area-player ul li img");

const info = document.querySelector(".info");
let pScore = 0;
let kScore = 0;

pPlayer.forEach(function (play) {
  play.addEventListener("click", function () {
    const pilkom = getPilihanKomputer();
    const pilplay = play.className;
    const hasil = getHasil(pilkom, pilplay);

    putar();
    setTimeout(function () {
      info.style.backgroundColor = "white";
      info.innerHTML = hasil;

      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", "img/" + pilkom + ".png");
      const pilplay = play.className;

      if (hasil == "MENANG") pScore++;
      if (hasil == "KALAH") kScore++;

      const getScorePlayer = document.querySelector(".score-player h2");
      getScorePlayer.innerHTML = pScore;
      const getScoreKomputer = document.querySelector(".score-komputer h2");
      getScoreKomputer.innerHTML = kScore;

      // console.log(pScore);
      // console.log(kScore);
    }, 2000);
  });
});
// }

// cek = confirm("Mau Main Lagi?");

// const waktuMulai = new Date("Mar 8, 2021 10:00:00").getTime();
// waktuTujuan = new Date("Mar 8, 2021 10:05:00");

// pPlayer.forEach((coba) => {
//   coba.addEventListener("click", function () {
//     const pilkom = getPilihanKomputer();
//     const pilplay = coba.className;
//     const hasil = getHasil(pilkom, pilplay);

//     score(hasil);
//   });
// });

// const hasil = getHasil(pilkom, pilplay);

// let scorePlayer = 0;
// let scoreKomputer = 0;
// if (hasil === "MENANG") scorePlayer++;
// if (hasil === "KALAH") scoreKomputer++;

// score

// let scorePlayer = 0;
// let scoreKomputer = 0;

// if

// const pGajah = document.querySelector(".gajah");
// const pOrang = document.querySelector(".orang");
// const pSemut = document.querySelector(".semut");
// const info = document.querySelector(".info");

// pGajah.addEventListener("click", function () {
//   const pilkom = getPilihanKomputer();
//   const pilplay = pGajah.className;
//   info.innerHTML = getHasil(pilkom, pilplay);
//   //   const tHasil = document.createTextNode(getHasil(pilkom, pilplay));
//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "img/" + pilkom + ".png");
// });

// pOrang.addEventListener("click", function () {
//   const pilkom = getPilihanKomputer();
//   const pilplay = pOrang.className;
//   info.innerHTML = getHasil(pilkom, pilplay);
//   //   const tHasil = document.createTextNode(getHasil(pilkom, pilplay));
//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "img/" + pilkom + ".png");
// });

// pSemut.addEventListener("click", function () {
//   const pilkom = getPilihanKomputer();
//   const pilplay = pSemut.className;
//   info.innerHTML = getHasil(pilkom, pilplay);
//   //   const tHasil = document.createTextNode(getHasil(pilkom, pilplay));
//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "img/" + pilkom + ".png");
// });
