/* ==================================================
   SCENE CONTROL — SCENE 1 → 4
================================================== */

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");

const beginBtn = document.getElementById("beginBtn");
const nextBtn = document.getElementById("nextBtn");

const scene3Next =
    document.getElementById("scene3Next");

const scene4Next =
    document.getElementById("scene4Next");


/* ==================================================
   BEGIN — SCENE 1 → SCENE 2
================================================== */

if (beginBtn) {

    beginBtn.addEventListener("click", () => {

        scene1.classList.remove("active");

        setTimeout(() => {

            scene2.classList.add("active");

        }, 350);

    });

}


/* ==================================================
   SCENE 2 → SCENE 3
================================================== */

if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        scene2.classList.remove("active");

        setTimeout(() => {

            scene3.classList.add("active");

        }, 350);

    });

}


/* ==================================================
   SCENE 3 → SCENE 4
================================================== */

if (scene3Next) {

    scene3Next.addEventListener("click", () => {

        scene3.classList.remove("active");

        setTimeout(() => {

            scene4.classList.add("active");

        }, 350);

    });

}


/* ==================================================
   SCENE 4 → SCENE 5
================================================== */

if (scene4Next) {

    scene4Next.addEventListener("click", () => {

        window.location.href =
            "scene5.html";

    });

}


/* ==================================================
   FALLING PETALS
================================================== */

const petalsContainer =
    document.getElementById("petals-container");


function createPetal() {

    if (!petalsContainer) {
        return;
    }


    const petal =
        document.createElement("div");

    petal.classList.add("petal");


    /* Random horizontal position */

    petal.style.left =
        Math.random() * 100 + "vw";


    /* Random size */

    const size =
        7 + Math.random() * 8;

    petal.style.width =
        size * 1.35 + "px";

    petal.style.height =
        size + "px";


    /* Random animation duration */

    const duration =
        6 + Math.random() * 7;

    petal.style.animationDuration =
        duration + "s";


    /* Random delay */

    petal.style.animationDelay =
        Math.random() * 1.5 + "s";


    /* Random opacity */

    petal.style.opacity =
        .35 + Math.random() * .4;


    petalsContainer.appendChild(petal);


    /* Remove after animation */

    setTimeout(() => {

        petal.remove();

    }, (duration + 2) * 1000);

}


/* Initial petals */

for (let i = 0; i < 15; i++) {

    setTimeout(
        createPetal,
        i * 250
    );

}


/* Continuous petals */

setInterval(
    createPetal,
    650
);


/* ==================================================
   SCENE 2 — PHOTO PARALLAX
================================================== */

const photoWrapper =
    document.getElementById("photoWrapper");


document.addEventListener("mousemove", (event) => {

    if (
        !scene2 ||
        !photoWrapper ||
        !scene2.classList.contains("active") ||
        window.innerWidth < 800
    ) {

        return;

    }


    const x =
        event.clientX / window.innerWidth - 0.5;

    const y =
        event.clientY / window.innerHeight - 0.5;


    const rotateX =
        y * -3;

    const rotateY =
        x * 3;


    photoWrapper.style.transform =

        `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(-3deg)
        translateY(-2px)
        `;

});


/* Reset photo */

document.addEventListener("mouseleave", () => {

    if (photoWrapper) {

        photoWrapper.style.transform =
            "rotate(-3deg)";

    }

});


/* ==================================================
   SCENE 3 — CARD INTERACTIONS
================================================== */

const favouriteCards =
    document.querySelectorAll(
        ".favourite-card"
    );


const messageText =
    document.getElementById(
        "messageText"
    );


favouriteCards.forEach((card) => {

    card.addEventListener("click", () => {

        const message =
            card.dataset.message;


        /* Remove previous selection */

        favouriteCards.forEach((item) => {

            item.classList.remove(
                "selected"
            );

        });


        /* Select current card */

        card.classList.add(
            "selected"
        );


        /* Fade message */

        if (messageText) {

            messageText.style.opacity =
                "0";

            messageText.style.transform =
                "translateY(5px)";


            /* Show new message */

            setTimeout(() => {

                messageText.textContent =
                    message;

                messageText.style.opacity =
                    "1";

                messageText.style.transform =
                    "translateY(0)";

            }, 180);

        }

    });

});