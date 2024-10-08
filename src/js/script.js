/* ROTATING */

const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

// Événement pour le bouton <Open>
open.addEventListener("click", () => {
  container.classList.add("show-navbar"); // Ajoute la classe "show-navbar" à l'élément container pour afficher le menu
});

// Événement pour le bouton <Close>
close.addEventListener("click", () => {
  container.classList.remove("show-navbar"); // Supprime la classe "show-navbar" de l'élément container pour masquer le menu
});

/* SEARCH */

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

// Événement pour le bouton de <Recherche>
btn.addEventListener("click", () => {
  search.classList.toggle("active"); // Ajoute ou supprime la classe "active" pour afficher ou masquer le champ de recherche
  input.focus();
});

/* Script.js */
