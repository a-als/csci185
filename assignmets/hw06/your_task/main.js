const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

const tracksInfo = [];
const artistCard = document.querySelector("#artist");

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    const tracksCard = document.querySelector("#tracks");
    tracksCard.innerHTML = "";
 
  
    const tracks = await getData(term, "track");

    for (let i = 0; i < tracks.length; i++) {
        if (i > 4) break;
        const track = tracks[i];
        tracksInfo[i] = track;
        const template = `
        <section class="track-item preview" onclick="listenToTrack(${i})">
            <img src="${track.album.image_url}">
            <i class="fas play-track fa-play" aria-hidden="true"></i>
            <div class="label">
                <h2>${track.name}</h2>
                <p>
                    ${track.artist.name}
                </p>
            </div>
        </section>
        `;
        tracksCard.innerHTML += template;
    }
}

async function getAlbums (term) {
    const albumsCard = document.querySelector("#albums");

    const albums = await getData(term, "album");

    for (let i = 0; i < albums.length; i++) {
        const album = albums[i];
        console.log(i);
        console.log(album);
        const template = `
        <section class="album-card" id="${album.id}">
            <div>
                <img src="${album.image_url}">
                <h2>${album.name}</h2>
                <div class="footer">
                    <a href="https://open.spotify.com/album/${album.id}"
                    </a>
                </div>
            </div>
        </section>
        `;
        albumsCard.innerHTML += template;
    }

}

async function getArtist (term) {
    const artist = (await getData(term, "artist"))[0];

    const template = `
    <section class="artist-card" id="${artist.id}">
        <div>
            <img src="${artist.image_url}">
            <h2>${artist.name}</h2>
            <div class="footer">
                <a href="https://open.spotify.com/artist/${artist.id}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>
    `;
    console.log(template);
    artistCard.innerHTML = template;
};


document.querySelector('#search').onkeyup = function (ev) {
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}



async function getData(term, type) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?q=${term}&type=${type}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data
}

function listenToTrack(i) {
    console.log("The Track is clicked");

    console.log(i);
    const track = tracksInfo[i];
    console.log(tracksInfo[i]);

    const template = `
        <section id="artist-section">
            <h1>Now Playing</h1>
            <section id="artist">
                <iframe style="border-radius:12px" 
                    src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator" 
                    width="200%" 
                    height="352" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </section>
        </section>
    `;

    artistCard.innerHTML = template;
}
