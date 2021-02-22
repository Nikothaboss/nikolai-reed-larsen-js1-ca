const getQS = document.location.search
const params = new URLSearchParams(getQS);
const id = params.get("imdb")
console.log(getQS)
console.log(params)
console.log(id)
console.log(window.location.href)


const url2 = `https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-show-details&imdb=${id}`
const details = document.querySelector(".details")




fetch(url2, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ab9c854e23msh8211f608e6be323p1f6dbajsn43f3499b9717",
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
	}
})

.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
})

// const detailsTemplate = (show_details)



