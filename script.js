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

// function score(itu) {
//   // const pilkom = getPilihanKomputer();
//   // const pilplay = play.className;
//   // const hasil = getHasil(pilkom, pilplay);
//   let pScore = 0;
//   let kScore = 0;
//   if (itu == "MENANG") {
//     pScore++;
//     // console.log("Score Komputer : " + kScore);
//   } else if (itu == "KALAH") {
//     kScore++;
//   } else {
//     pScore = pScore + 0;
//     kScore = kScore + 0;
//   }

//   console.log(pScore);
//   console.log(kScore);

//   // setInterval(score, 80);
//   // clearInterval;
// }

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

      console.log(pScore);
      console.log(kScore);
    }, 2000);
  });
});

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
