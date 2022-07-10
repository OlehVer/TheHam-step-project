const workBtnCollection = document.querySelectorAll(".work-btn");
const workBtnContainer = document.querySelector(".work-menu-btns");
const workGallery = document.querySelector(".work-gallery");
const workSectionContainer = document.querySelector(".amazing-work");

// картка картинки з відповідними класами
const flipElement = document.createElement("div");
flipElement.classList.add("work-card");
flipElement.innerHTML = `
    <div class="work-card-front">
        <img src=" " alt=" ">                
    </div>                  
    <div class="work-card-back">
        <div class="card-back-icons">                
            <a href=""><i class="fas fa-link card-back-more"></i></a>
            <a href=""><i class="fa-solid fa-square card-back-stop"></i ></a>              
        </div>
        <span class="card-back-title">creative design</span>
        <span class="card-back-subtitle">some text</span>
    </div>                 
`;

const addMoreBtn = document.querySelector(".amazing-btn");

let count = 0;

const loaderBox = document.querySelector(".amazing-loader");



// перемикач зображень по категоріям
workBtnContainer.addEventListener("click", function (event) {
    if(event.target.closest(".work-btn")) {    
        workBtnCollection.forEach((btn) => btn.classList.remove("work-active"));
        event.target.classList.add("work-active");
        workGallery.innerHTML = "";
        switch (event.target.dataset.work) {
            case "graphicDesign":
                graphicDesignImgCollection.forEach((img) => workGallery.append(newFlipCard(img)));
                addMoreBtn.remove();
                break;
            case "webDesign":
                webDesignImgCollection.forEach((img) => workGallery.append(newFlipCard(img)));
                addMoreBtn.remove();
                break;
            case "landingPages":
                landingPagesImgCollection.forEach((img) => workGallery.append(newFlipCard(img)));
                addMoreBtn.remove();
                break;
            case "wordpress":
                wordpressImgCollection.forEach((img) => workGallery.append(newFlipCard(img)));
                addMoreBtn.remove();
                break;
            default:
                workSectionContainer.append(addMoreBtn);
                shuffleArr(allImgCollection);
                count = 0;
                allImgCollection.forEach(function(img) {
                    if (count < 12) {
                    count++;
                    workGallery.append(newFlipCard(img));
                    } 
                });
        }}
});


addMoreBtn.addEventListener("click", function () {
    loaderBox.classList.remove("hidden");
    setTimeout(function () { 
    loaderBox.classList.add("hidden");
    for (let i = count; i < count + 12; i++) {
        workGallery.append(newFlipCard(allImgCollection[i]));
    };
    count += 12;
    if (count === allImgCollection.length) {
        addMoreBtn.remove();
    }
    }, 2100);
    
});



function newFlipCard(img) {
    let figure = flipElement.cloneNode(true);
    figure.querySelector("img").replaceWith(img);
    figure.querySelector(".card-back-subtitle").innerText = img.dataset.work;
    return figure;
}

function addImgCollection(arr, name) {
    let newArr = [];
    arr.forEach(function (obj, i) {
        let img = document.createElement("img");
        img.setAttribute("src", obj.source);
        let imgAlt = name + (i + 1);
        img.setAttribute("alt", imgAlt);
        img.dataset.work = name;
        img.classList.add("card-face");
        newArr.push(img);
    });
    return newArr;
}

function shuffleArr(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


const graphicDesignSrcCollection = [
    {source: "images\\graphicDesign\\graphic-design1.jpg"},
    {source: "images\\graphicDesign\\graphic-design2.jpg"},
    {source: "images\\graphicDesign\\graphic-design3.jpg"},
    {source: "images\\graphicDesign\\graphic-design4.jpg"},
    {source: "images\\graphicDesign\\graphic-design5.jpg"},
    {source: "images\\graphicDesign\\graphic-design6.jpg"},
    {source: "images\\graphicDesign\\graphic-design7.jpg"},
    {source: "images\\graphicDesign\\graphic-design8.jpg"},
    {source: "images\\graphicDesign\\graphic-design9.jpg"},
    {source: "images\\graphicDesign\\graphic-design10.jpg"},
    {source: "images\\graphicDesign\\graphic-design11.jpg"},
    {source: "images\\graphicDesign\\graphic-design12.jpg"},
];

const landingPagesSrcCollection = [
    {source: "images\\landingPages\\landing-page1.jpg"},
    {source: "images\\landingPages\\landing-page2.jpg"},
    {source: "images\\landingPages\\landing-page3.jpg"},
    {source: "images\\landingPages\\landing-page4.jpg"},
    {source: "images\\landingPages\\landing-page5.jpg"},
    {source: "images\\landingPages\\landing-page6.jpg"},
    {source: "images\\landingPages\\landing-page7.jpg"},
];

const webDesignSrcCollection = [
    {source: "images\\webDesign\\web-design1.jpg"},
    {source: "images\\webDesign\\web-design2.jpg"},
    {source: "images\\webDesign\\web-design3.jpg"},
    {source: "images\\webDesign\\web-design4.jpg"},
    {source: "images\\webDesign\\web-design5.jpg"},
    {source: "images\\webDesign\\web-design6.jpg"},
    {source: "images\\webDesign\\web-design7.jpg"},
];

const wordpressSrcCollection = [
    {source: "images\\wordpress\\wordpress1.jpg"},
    {source: "images\\wordpress\\wordpress2.jpg"},
    {source: "images\\wordpress\\wordpress3.jpg"},
    {source: "images\\wordpress\\wordpress4.jpg"},
    {source: "images\\wordpress\\wordpress5.jpg"},
    {source: "images\\wordpress\\wordpress6.jpg"},
    {source: "images\\wordpress\\wordpress7.jpg"},
    {source: "images\\wordpress\\wordpress8.jpg"},
    {source: "images\\wordpress\\wordpress9.jpg"},
    {source: "images\\wordpress\\wordpress10.jpg"},
];

const graphicDesignImgCollection  = addImgCollection(graphicDesignSrcCollection, "Graphic Design");
const landingPagesImgCollection  = addImgCollection(landingPagesSrcCollection, "Landing Pages");
const webDesignImgCollection  = addImgCollection(webDesignSrcCollection, "Web Design");
const wordpressImgCollection  = addImgCollection(wordpressSrcCollection, "Wordpress");
const allImgCollection = [...graphicDesignImgCollection, ...landingPagesImgCollection, ...webDesignImgCollection, ...wordpressImgCollection];

const galleryFiller = function () {
    shuffleArr(allImgCollection);
    count = 0;
    allImgCollection.forEach(function(img) {
        if (count < 12) {
            count++;
            workGallery.append(newFlipCard(img));
        } 
    });
};

galleryFiller();

