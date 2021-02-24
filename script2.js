const getQS = document.location.search
const params = new URLSearchParams(getQS);
const id = params.get("imdb")
console.log(getQS)
console.log(params)
console.log(id)
console.log(window.location.href)


const url = `https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-show-details&imdb=${id}`
const details = document.querySelector(".details")
const loading = document.querySelector(".loading")

fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ab9c854e23msh8211f608e6be323p1f6dbajsn43f3499b9717",
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
	}
})

.then(response => response.json())
.then(data => detailsTemplate(data))
.catch(err => {
	console.error(err);
    details.innerHTML = "Something went wrong, blame IMDB!"
})
.finally(()=> loading.classList.remove("spinner-border"));

const detailsTemplate = (show_details) =>{
    console.log(show_details)
    document.title = show_details.title;
    details.innerHTML = ""
    let tvDetailsDiv = `
    <div class="show-wrapper">
        <h1>${show_details.title}</h1>
        <h2>Description</h2>
        <p>${show_details.description}</p>
        <p>Rating: ${show_details.imdb_rating}</p>
        <p>Reviews: ${show_details.vote_count}</p>
        <p>Available on ${show_details.networks}</p>
        <p><a href="index.html">Back</a></p>
    </div>
    `
    details.innerHTML += tvDetailsDiv

};



