const { MeiliSearch } = require('meilisearch')
const pokedex = require('./pokedex/pokedex.json')


const client = new MeiliSearch({ host: 'http://127.0.0.1:7700' })

const pokemons = pokedex.map(pokemon => {
    const base_img = ("000" + pokemon.id).slice(-3)
    return {
        ...pokemon,
        image:`pokedex/thumbnails/${base_img}.png`
    }
})


 client.index('pokemons').addDocuments(pokemons)
     .then((res) => console.log(res))


