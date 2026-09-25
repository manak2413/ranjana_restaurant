/* =========================================================
   RANJANA RESTAURANT GALLERY
========================================================= */


/* =========================================================
   GALLERY DATA
========================================================= */

const galleryData = {

    food: {

        smallTitle: "OUR FOOD",

        title: "Delicious Food",

        description:
            "Freshly prepared dishes made with love.",

        images: [

            {
                image: "./image/pizza.jpg",
                title: "Fresh Pizza"
            },

            {
                image: "./image/Pasta.jpg",
                title: "Creamy Pasta"
            },

            {
                image: "./image/Paneer Tikka.jpg",
                title: "Paneer Tikka"
            },

            {
                image: "./image/Dal Makhani.jpg",
                title: "Dal Makhani"
            },

            {
                image: "./image/Cake.jpg",
                title: "Special Cake"
            }

        ]

    },


    drinks: {

        smallTitle: "OUR DRINKS",

        title: "Refreshing Drinks",

        description:
            "Fresh and refreshing drinks for every mood.",

        images: [

            {
                image: "./image/Cold Coffee.jpg",
                title: "Cold Coffee"
            },

            {
                image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1000&q=80",
                title: "Fresh Juice"
            },

            {
                image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80",
                title: "Fresh Beverage"
            },

            {
                image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
                title: "Hot Coffee"
            },

            {
                image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80",
                title: "Refreshing Drink"
            }

        ]

    },


    desserts: {

        smallTitle: "OUR DESSERTS",

        title: "Sweet Desserts",

        description:
            "Delicious desserts to make your meal even sweeter.",

        images: [

            {
                image: "./image/Cake.jpg",
                title: "Chocolate Cake"
            },

            {
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
                title: "Cream Cake"
            },

            {
                image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1000&q=80",
                title: "Sweet Dessert"
            },

            {
                image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=80",
                title: "Dessert Special"
            },

            {
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80",
                title: "Fresh Dessert"
            }

        ]

    },


    indian: {

        smallTitle: "INDIAN SPECIAL",

        title: "Indian Cuisine",

        description:
            "Authentic Indian flavours prepared with rich spices.",

        images: [

            {
                image: "./image/Paneer Tikka.jpg",
                title: "Paneer Tikka"
            },

            {
                image: "./image/Dal Makhani.jpg",
                title: "Dal Makhani"
            },

            {
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80",
                title: "Indian Thali"
            },

            {
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
                title: "Indian Special"
            },

            {
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=80",
                title: "Traditional Curry"
            }

        ]

    },


    pizza: {

        smallTitle: "PIZZA & PASTA",

        title: "Pizza & Pasta",

        description:
            "Freshly prepared Italian favourites served hot.",

        images: [

            {
                image: "./image/pizza.jpg",
                title: "Cheesy Pizza"
            },

            {
                image: "./image/Pasta.jpg",
                title: "Creamy Pasta"
            },

            {
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=80",
                title: "Italian Pizza"
            },

            {
                image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1000&q=80",
                title: "Italian Pasta"
            },

            {
                image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=80",
                title: "Pizza Special"
            }

        ]

    },


    ambience: {

        smallTitle: "OUR RESTAURANT",

        title: "Beautiful Ambience",

        description:
            "A warm and comfortable place to enjoy food with family.",

        images: [

            {
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
                title: "Restaurant Interior"
            },

            {
                image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80",
                title: "Dining Area"
            },

            {
                image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=80",
                title: "Dining Table"
            },

            {
                image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80",
                title: "Beautiful Restaurant"
            },

            {
                image: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=1000&q=80",
                title: "Restaurant View"
            }

        ]

    }

};


/* =========================================================
   ELEMENTS
========================================================= */

const galleryButtons =
    document.querySelectorAll(".gallery-btn");

const galleryGrid =
    document.getElementById("galleryGrid");

const gallerySmallTitle =
    document.getElementById("gallerySmallTitle");

const galleryTitle =
    document.getElementById("galleryTitle");

const galleryDescription =
    document.getElementById("galleryDescription");


/* =========================================================
   SHOW GALLERY
========================================================= */

function showGallery(category) {

    const data = galleryData[category];

    if (!data) {
        return;
    }


    /* Change heading */

    gallerySmallTitle.textContent =
        data.smallTitle;

    galleryTitle.textContent =
        data.title;

    galleryDescription.textContent =
        data.description;


    /* Remove old images */

    galleryGrid.innerHTML = "";


    /* Add new images */

    data.images.forEach((item) => {

        const div =
            document.createElement("div");

        div.className =
            "gallery-item";


        div.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.title}"
            >

            <div class="gallery-overlay">

                <h4>${item.title}</h4>

                <span>Ranjana Family Restaurant</span>

            </div>

        `;


        /* Open image */

        div.addEventListener(
            "click",
            function () {

                openLightbox(
                    item.image,
                    item.title
                );

            }
        );


        galleryGrid.appendChild(div);

    });

}


/* =========================================================
   BUTTON CLICK
========================================================= */

galleryButtons.forEach((button) => {

    button.addEventListener(
        "click",
        function () {

            const category =
                this.dataset.gallery;


            /* Remove active */

            galleryButtons.forEach((btn) => {

                btn.classList.remove("active");

            });


            /* Add active */

            this.classList.add("active");


            /* Show selected gallery */

            showGallery(category);

        }
    );

});


/* =========================================================
   LIGHTBOX
========================================================= */

const lightbox =
    document.getElementById("galleryLightbox");

const lightboxImage =
    document.getElementById("galleryLightboxImage");

const closeButton =
    document.getElementById("galleryClose");


function openLightbox(image, title) {

    lightboxImage.src = image;

    lightboxImage.alt = title;

    lightbox.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow =
        "";

}


/* Close button */

closeButton.addEventListener(
    "click",
    closeLightbox
);


/* Click outside image */

lightbox.addEventListener(
    "click",
    function (event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    }
);


/* ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);


/* =========================================================
   FIRST GALLERY
========================================================= */

showGallery("food");