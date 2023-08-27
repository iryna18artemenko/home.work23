function getImage() {
    const random = Math.floor(Math.random() * 9) + 1;

    return image.setAttribute("src", `./images/${random}.jpg ` );
}


getImage();
