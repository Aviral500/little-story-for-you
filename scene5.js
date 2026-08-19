/* ==================================================
   SCENE 5 — THE LITTLE THINGS
================================================== */


/* ==================================================
   MEMORY CARDS
================================================== */

const memoryCards =
    document.querySelectorAll(".memory-card");

const memoryMessage =
    document.getElementById("memoryMessage");

const messageText =
    document.getElementById("messageText");


memoryCards.forEach((card) => {

    card.addEventListener("click", () => {

        const message =
            card.dataset.message;


        /* Fade old message */

        messageText.style.opacity = "0";

        messageText.style.transform =
            "translateY(6px)";


        setTimeout(() => {

            messageText.textContent =
                message;

            messageText.style.opacity =
                "1";

            messageText.style.transform =
                "translateY(0)";

        }, 220);


        /* Remove selected state */

        memoryCards.forEach((item) => {

            item.classList.remove("selected");

        });


        /* Select current card */

        card.classList.add("selected");

    });

});


/* ==================================================
   FALLING BLUE PETALS
================================================== */

const petalsContainer =
    document.getElementById("petals-container");


function createPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add("petal");


    /* Random horizontal position */

    petal.style.left =
        Math.random() * 100 + "vw";


    /* Random size */

    const size =
        6 + Math.random() * 6;

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

for (let i = 0; i < 12; i++) {

    setTimeout(
        createPetal,
        i * 300
    );

}


/* Continuous petals */

setInterval(
    createPetal,
    800
);


/* ==================================================
   NEXT → SCENE 6
================================================== */

const scene5Next =
    document.getElementById("scene5Next");


scene5Next.addEventListener("click", () => {

    /*
        Scene 6 is a separate page.

        Since scene5.html is inside
        the "scenes" folder, scene6.html
        is in the same folder.
    */

    window.location.href =
        "scene6.html";

});