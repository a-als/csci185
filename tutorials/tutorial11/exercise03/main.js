const restaurants = [
    "Suwana's Thai Orchid", 
    "Khao Thai Cuisine", 
    "Little Bee Thai", 
    "PIE.ZAA Pizza", 
    "Fahrenheit Pizza & Brewhouse", 
    "Fresh Wood Fired Pizza West", 
    "Wasabi", 
    "Red Ginger Dimsum And Tapas", 
    "Murasaki Asheville"
];



const output = document.querySelector("#output");

for (let i = 0; i < restaurants.length; i++) {
    const element = `<p>${restaurants[i]}</p>`;
    output.insertAdjacentHTML("beforeend", element);
    
}