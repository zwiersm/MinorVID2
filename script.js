// document.addEventListener("DOMContentLoaded", function () {
//     // Initialiseer het flipbook
//     $("#flipbook").turn({
//         // width: 800,   // Breedte van het flipbook
//         // height: 500,  // Hoogte van het flipbook
//         autoCenter: true, // Centreer het boek in de viewport
//         duration: 1000 // Tijd voor het omslaan van een pagina (in ms)
//     });

//     // Voeg een eventlistener toe voor de pijltjestoetsen
//     $(document).keydown(function(event) {
//         if (event.key === "ArrowRight") { // Pijltje naar rechts
//             $("#flipbook").turn("next");
//         } else if (event.key === "ArrowLeft") { // Pijltje naar links
//             $("#flipbook").turn("previous");
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Initialiseer het flipbook
//     $("#flipbook").turn({
//         autoCenter: true, // Centreer het boek in de viewport
//         duration: 1000 // Tijd voor het omslaan van een pagina (in ms)
//     });

//     // Laad het audiobestand
//     const flipSound = new Audio("./sounds/flip.mp3"); // Pad naar je audiobestand

//     // Voeg een eventlistener toe voor de pijltjestoetsen
//     $(document).keydown(function (event) {
//         if (event.key === "ArrowRight") { // Pijltje naar rechts
//             $("#flipbook").turn("next");
//             flipSound.currentTime = 0; // Reset het geluid naar het begin
//             flipSound.play(); // Speel het geluid af
//         } else if (event.key === "ArrowLeft") { // Pijltje naar links
//             $("#flipbook").turn("previous");
//             flipSound.currentTime = 0; // Reset het geluid naar het begin
//             flipSound.play(); // Speel het geluid af
//         }
//     });

//     document.querySelectorAll(".tab").forEach(tab => {
//         tab.addEventListener("click", function () {
//             const page = parseInt(this.getAttribute("data-page")); // Haal de pagina op uit de tab
//             $("#flipbook").turn("page", page); // Ga naar die pagina
//             flipSound.currentTime = 0; // Reset het geluid naar het begin
//             flipSound.play(); // Speel het geluid af
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    // Initialiseer het flipbook
    $("#flipbook").turn({
        autoCenter: true, // Centreer het boek in de viewport
        duration: 1000 // Tijd voor het omslaan van een pagina (in ms)
    });

    // Laad het audiobestand
    const flipSound = new Audio("./sounds/flip.mp3"); // Pad naar je audiobestand

    // Mapping van data-page naar werkelijke pagina's
    const pageMapping = {
        "1": 16,   // CONTACT => pagina 14
        "2": 14,   // RANDALL => pagina 14
        "3": 12,   // SUNNY => pagina 12
        "4": 10,   // ROOK => pagina 10
        "5": 8,    // FREE => pagina 8
        "6": 6,    // KLADDER => pagina 6
        "7": 4     // TYPO => pagina 4
    };

    // Voeg een eventlistener toe voor de pijltjestoetsen
    $(document).keydown(function (event) {
        if (event.key === "ArrowRight") { // Pijltje naar rechts
            $("#flipbook").turn("next");
            flipSound.currentTime = 0; // Reset het geluid naar het begin
            flipSound.play(); // Speel het geluid af
        } else if (event.key === "ArrowLeft") { // Pijltje naar links
            $("#flipbook").turn("previous");
            flipSound.currentTime = 0; // Reset het geluid naar het begin
            flipSound.play(); // Speel het geluid af
        }
    });

    // Voeg een klik-event toe voor de tabbladen
    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", function () {
            const tabPage = this.getAttribute("data-page"); // Haal het data-page attribuut op
            const targetPage = pageMapping[tabPage]; // Zoek de werkelijke pagina uit de mapping
            if (targetPage) {
                $("#flipbook").turn("page", targetPage); // Ga naar de juiste pagina
                flipSound.currentTime = 0; // Reset het geluid naar het begin
                flipSound.play(); // Speel het geluid af
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Haal de overlay en video op
    const videoOverlay = document.getElementById("videoOverlay");
    const video = document.getElementById("videoPage13");

    // Voeg een klik-event toe voor de overlay
    videoOverlay.addEventListener("click", function () {
        // Maak de video zichtbaar en speel de video af
        video.style.display = "block";  // Maak de video zichtbaar
        video.play();  // Speel de video af
        video.muted = false; // Zet het geluid aan

        // Verberg de overlay nadat de video is gestart
        videoOverlay.style.display = "none";
    });

    // Optioneel: Zorg ervoor dat de video stopt en de overlay opnieuw zichtbaar wordt als de video is afgelopen
    video.addEventListener("ended", function () {
        videoOverlay.style.display = "flex";  // Toont de overlay opnieuw als de video is afgelopen
        video.style.display = "none";  // Verberg de video
    });
});


