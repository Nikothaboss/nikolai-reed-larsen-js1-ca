const container = document.querySelector(".container");
const loading = document.querySelector(".loading");


const url = "https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-popular-shows&page=1&year=2020";

fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ab9c854e23msh8211f608e6be323p1f6dbajsn43f3499b9717",
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
	}
})


.then(response => response.json())
.then(data => tvShowTemplate(data))

.catch(err => {
	console.error(err);
    container.innerHTML = "Something went wrong, blame IMDB!"
})
.finally(()=> loading.classList.remove("spinner-border"));



const tvShowTemplate = (shows) =>{
    container.innerHTML = "";
    let counter = 1
    for(show of shows.tv_results){
        console.log(show)
        if(show === shows.tv_results[10]) {break}
        let tvShowDiv = `
        <div class="episode-wrapper">
            <div class="episode">
                <h2>${counter ++}.</h2><a href="details.html?type=get-show-details&imdb=${show.imdb_id}"><h2>${show.title}</h2></a>
            </div>
            <div class="info">
                <p>Release Year ${show.year}</p>
            </div>
        </div>
        `
        container.innerHTML += tvShowDiv
    }
};