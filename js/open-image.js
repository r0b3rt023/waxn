let divImages = document.getElementsByClassName("image-item");
for (let i = 0; i < divImages.length; i++) {
    console.log(divImages[i].children[0].src);
    divImages[i].onclick = function() {window.open(divImages[i].children[0].src)}
}
