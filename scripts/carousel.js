const feedbackLiCollection = document.querySelectorAll(".feedback-li");
const carouselContainer = document.querySelector(".container-carousel");
const carouselPersonCollection = document.querySelectorAll(".carousel-person");


let countActive = 0;

carouselContainer.addEventListener("click", function (event) {
    carouselPersonCollection.forEach((li) => li.classList.remove("person-active"));

    if (event.target.closest(".prev-btn")) {
        countActive--;
        if(countActive < 0) {
            countActive = (carouselPersonCollection.length - 1);
        };
    } else if (event.target.closest(".next-btn")) {
        countActive++;
        if(countActive === carouselPersonCollection.length) {
            countActive = 0;
        };
    } else if (event.target.closest(".carousel-person")) {
        carouselPersonCollection.forEach(function(li, index) {
            if(li === event.target) {
                countActive = index;
            };
        });
    };
    
    carouselPersonCollection[countActive].classList.add("person-active");

    feedbackLiCollection.forEach(function(li) {
        li.classList.add("hide");
        li.classList.remove("show");
        if (li.dataset.person === document.querySelector(".person-active").dataset.person) {
            li.classList.remove("hide");
            li.classList.add("show");
        }
    });
});
