const container = document.querySelector(".content");
const baseURL = "https://source.unsplash.com/random"
const rows = 4;

let htmlCode;
for (let i = 0; i < rows; i++){
    const img = document.createElement('img')
    htmlCode = `<img src = "${baseURL}${randomSize()}" >`;
    document.getElementsByClassName(`.card`)[i].innerHTL = htmlCode;
}




function randomSize() {
    return `${randomNumber()}x${randomNumber()}`;
}

function randomNumber() {
    return Math.floor(Math.random() * 10) + 300;
}