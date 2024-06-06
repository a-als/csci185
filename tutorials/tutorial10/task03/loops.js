const nameList = [
    "Atlas",
    "Avery",
    "Cali",
    "Cameron",
    "Carol",
    "Dean",
    "Destiny",
    "Dylan",
    "Heather",
    "Jack",
    "Joe",
    "Keiran",
    "Kelly",
    "Maria",
    "Merlin",
    "Natasha",
    "Nicholas",
    "Olivia",
    "Rinta",
    "Trey",
];

// Your code goes here....
const cont = document.querySelector("#output_container");

function showNames() {
    for (let i = 0; i < nameList.length; i++) {
        const element = `<p>${nameList[i]}</p>`;
        cont.insertAdjacentHTML("beforeend", element);
    }
}

function clearNames() {
    cont.innerHTML = "";
}