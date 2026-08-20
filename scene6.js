/* ==================================================
   SCENE 6 / 7 / 8 CONTROL
================================================== */

const scene6 =
    document.getElementById("scene6");

const scene7 =
    document.getElementById("scene7");

const scene8 =
    document.getElementById("scene8");


const scene6Next =
    document.getElementById("scene6Next");

const scene7Next =
    document.getElementById("scene7Next");

const replayBtn =
    document.getElementById("replayBtn");


/* ==================================================
   SCENE 6 → SCENE 7
================================================== */

scene6Next.addEventListener("click", () => {

    scene6.classList.remove("active");

    setTimeout(() => {

        scene7.classList.add("active");

    }, 400);

});


/* ==================================================
   SCENE 7 → SCENE 8
================================================== */

scene7Next.addEventListener("click", () => {

    scene7.classList.remove("active");

    setTimeout(() => {

        scene8.classList.add("active");

        birthdayMusic.volume = 0.35;
        birthdayMusic.currentTime = 0;

        birthdayMusic.play().catch((error) => {

            console.log(
                "Music could not start:",
                error
            );

        });

    }, 400);

});


/* ==================================================
   REPLAY
================================================== */

replayBtn.addEventListener("click", () => {

    birthdayMusic.pause();

    birthdayMusic.currentTime = 0;

    window.location.href =
        "index.html";

});


/* ==================================================
   FALLING PETALS
================================================== */

const petalsContainer =
    document.getElementById("petals-container");


function createPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add("petal");


    /* Random position */

    petal.style.left =
        Math.random() * 100 + "vw";


    /* Random size */

    const size =
        6 + Math.random() * 7;

    petal.style.width =
        size * 1.4 + "px";

    petal.style.height =
        size + "px";


    /* Random duration */

    const duration =
        6 + Math.random() * 7;

    petal.style.animationDuration =
        duration + "s";


    /* Random delay */

    petal.style.animationDelay =
        Math.random() * 2 + "s";


    /* Random opacity */

    petal.style.opacity =
        .25 + Math.random() * .35;


    petalsContainer.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, (duration + 2) * 1000);

}


/* Initial petals */

for (let i = 0; i < 14; i++) {

    setTimeout(
        createPetal,
        i * 250
    );

}


/* Continuous petals */

setInterval(
    createPetal,
    750
);