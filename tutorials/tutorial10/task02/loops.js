const cont = document.querySelector("#output_container");

function drawImagesDifferent() {
    for (let i = 1; i <= 50; i++) {
        const element = `<img src="https://picsum.photos/200/200?random=${i}" alt="random image ${i}">`;
        cont.insertAdjacentHTML("beforeend", element);
    }
}

function clearImages() {
    console.log("clearImages");
    cont.innerHTML = "";
}
