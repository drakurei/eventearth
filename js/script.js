/* ===========================
   NAVIGATION - page active
=========================== */
document.addEventListener("DOMContentLoaded", function () {
    var liens = document.querySelectorAll("nav ul li a");
    var pageCourante = window.location.pathname.split("/").pop();

    liens.forEach(function (lien) {
        var href = lien.getAttribute("href");
        if (href === pageCourante || (pageCourante === "" && href === "index.html")) {
            lien.classList.add("active");
        }
    });
});

/* ===========================
   VALIDATION FORMULAIRE
=========================== */
function validerFormulaire() {
    var valide = true;

    // Récupération des champs
    var titre       = document.getElementById("titre");
    var description = document.getElementById("description");
    var prix        = document.getElementById("prix");
    var date        = document.getElementById("date");
    var lieu        = document.getElementById("lieu");
    var type        = document.getElementById("type");

    // On cache toutes les erreurs d'abord
    document.querySelectorAll(".erreur").forEach(function (el) {
        el.style.display = "none";
    });

    // Validation champ par champ
    if (titre.value.trim() === "") {
        document.getElementById("erreur-titre").style.display = "block";
        valide = false;
    }

    if (description.value.trim().length < 20) {
        document.getElementById("erreur-description").style.display = "block";
        valide = false;
    }

    if (prix.value === "" || isNaN(prix.value) || Number(prix.value) < 0) {
        document.getElementById("erreur-prix").style.display = "block";
        valide = false;
    }

    if (date.value === "") {
        document.getElementById("erreur-date").style.display = "block";
        valide = false;
    }

    if (lieu.value.trim() === "") {
        document.getElementById("erreur-lieu").style.display = "block";
        valide = false;
    }

    if (type.value === "") {
        document.getElementById("erreur-type").style.display = "block";
        valide = false;
    }

    if (valide) {
        alert("✅ Votre évènement « " + titre.value + " » a bien été soumis ! Merci.");
        document.getElementById("form-evenement").reset();
    }

    return false; // Empêche l'envoi réel du formulaire
}
