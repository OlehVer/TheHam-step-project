const sliderBtnContainer = document.querySelector(".slider-services-btns");
const sliderBtnCollection = document.querySelectorAll(".services-btn");
const articlesCollection = document.querySelectorAll(".container-article-decription");

sliderBtnContainer.addEventListener("click", function (event) {
    sliderBtnCollection.forEach((btn) => btn.classList.remove("service-active"));
    event.target.classList.add("service-active");
    articlesCollection.forEach(function (div) {
        div.classList.add("hidden");
        if(div.dataset.article === event.target.dataset.article) {
            div.classList.remove("hidden");
        }
        
    })

});