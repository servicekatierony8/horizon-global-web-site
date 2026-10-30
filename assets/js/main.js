/* HORIZON GLOBAL SARL — interactions du site vitrine
   - Menu mobile
   - Formulaire de demande de devis -> WhatsApp de l'entreprise */

/* Construction du lien WhatsApp du formulaire de devis.
   Fonction pure : testable hors navigateur. */
function buildWhatsAppUrl(data) {
  var lignes = ["Bonjour HORIZON GLOBAL SARL,"];
  if (data.nom) lignes.push("Je suis " + data.nom + ".");
  if (data.pole) lignes.push("Pôle concerné : " + data.pole + ".");
  if (data.message) lignes.push(data.message);
  if (data.telephone) lignes.push("Mon téléphone : " + data.telephone);
  lignes.push("Demande envoyée depuis le site vitrine.");
  return "https://api.whatsapp.com/send?phone=2250564323711&text=" +
    encodeURIComponent(lignes.join("\n"));
}

/* Exposé uniquement pour les tests automatisés internes */
if (typeof module !== "undefined" && module.exports) {
  module.exports = { buildWhatsAppUrl: buildWhatsAppUrl };
}

/* Code navigateur uniquement */
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    /* Menu mobile */
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("nav-principale");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var ouvert = nav.classList.toggle("ouvert");
        toggle.setAttribute("aria-expanded", ouvert ? "true" : "false");
        toggle.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
      });
      nav.addEventListener("click", function (e) {
        if (e.target.closest("a")) {
          nav.classList.remove("ouvert");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    /* Formulaire de devis -> WhatsApp */
    var form = document.getElementById("form-devis");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = {
          nom: (form.elements.nom.value || "").trim(),
          telephone: (form.elements.telephone.value || "").trim(),
          pole: form.elements.pole.value || "",
          message: (form.elements.message.value || "").trim()
        };
        window.open(buildWhatsAppUrl(data), "_blank", "noopener");
        var conf = document.getElementById("form-confirmation");
        if (conf) {
          conf.hidden = false;
          conf.textContent = "Votre demande est prête — WhatsApp s'ouvre pour l'envoyer à HORIZON GLOBAL SARL au (+225) 05 64 32 37 11.";
        }
      });
    }
  });
}
