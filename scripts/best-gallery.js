let elem = document.querySelector('.grid');
let msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 378,
  gutter: 13,
});

const bestMoreBtn = document.querySelector(".best-btn");
const bestLoader = document.querySelector(".best-loader");
const bestGridContainer = document.querySelector(".best-container");

// при додаванні нових картинок masonry поводиться некоректно, розміщення відбувається лише після зміни вюпорту. msnry.appended, msnry.addItems не допомагають
bestMoreBtn.addEventListener("click", function () {
    bestLoader.classList.remove("hidden");
    setTimeout(function () { 
    bestLoader.classList.add("hidden");
    bestMoreBtn.remove();
    
    // let newHouseArr = [];
    // for (let i = 1; i < 7 ; i++) {
    //     let newMason = document.createElement("div");
    //     newMason.classList.add("grid-item");
    //     let newImg = document.createElement("img");
    //     newImg.setAttribute("src", `images/bestGallery/new-house-${i}.jpg`);
    //     newImg.setAttribute("alt", `new house image ${i}`)
    //     newMason.append(newImg);
    //     bestGridContainer.append(newMason);
    //     newHouseArr.push(newMason);
    // };
    // msnry.appended(newHouseArr);
    }, 2100);
    
});


