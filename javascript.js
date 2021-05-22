let posljednja_pozicija = window.pageYOffset;

let header = document.querySelector(".header");

window.onscroll = function() {
  let trenutna = window.pageYOffset;

  if (posljednja_pozicija > trenutna) {
    if (trenutna <= 140) {
      header.style.top = 0;
    }
  } else {
    header.style.top = `${-header.offsetHeight}px`;
  }

  posljednja_pozicija = trenutna;
}