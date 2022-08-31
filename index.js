//https://pokemondb.net/type/dual

const teamSize = 6
const totalTypesOnTeam = 7
const pokemonOnTeam = [
    //"lucario",
    //"swampert",
    //"chandelure",
    //"scizor",
    //"metagross",
    //"rotom-fan",
    //"sylveon",
    //"drapion",
    //"kingdra"
]
const pokemonNotOnTeam = [
    //"empoleon",
    "duraludon",
    "primarina",
    "incineroar",
    "sylveon",
]

function statistics(arr) {
    if (!arr || arr.length === 0) {
        return {
            mean: 0,
            standardDeviation: 0
        }
    }

    const n = arr.length
    const mean = arr.reduce((a, b) => a + b) / n

    return {
        mean: parseFloat(mean.toFixed(2)),
        standardDeviation: parseFloat(
            Math.sqrt(
                arr
                    .map(x => Math.pow(x - mean, 2))
                    .reduce((a, b) => a + b)
                /
                n
            ).toFixed(2)
        )
    }
}

import { getResistantTypes, generateTeams } from './pokedex.js';
getResistantTypes()
    .then((data) => {
        const resistantTypes = data
            .slice(0, 30)

        console.log(`${resistantTypes.length} type combinations available`)
        console.log(JSON.stringify(
            resistantTypes.map(t => ({
                name: t.name,
                //weaknesses: t.weaknesses,
                damage_from_score: t.damage_from_score,
                damage_to_score: t.damage_to_score,
                pokemon: t.pokemon[0].pokemon.name,
                //pokemon_count: t.pokemon.length
            })),
            null,
            2
        ))

        const resistantTeams = generateTeams({ types: resistantTypes })

        console.log(`${resistantTeams.length} possible teams`)

        const teamStatistics = statistics(
            resistantTeams.map(t => t.score)
        )

        console.log(`Average team score: ${teamStatistics.mean}`)
        console.log(`Standard deviation of team scores: ${teamStatistics.standardDeviation}`)

        const selectedTeams = resistantTeams
            .filter(t => t.typesTotal >= (Math.min(Math.max(totalTypesOnTeam, teamSize), teamSize * 2)))
            .filter(t => {
                if (pokemonOnTeam.length === 0)
                    return true;
                if (pokemonOnTeam.length < teamSize)
                    return pokemonOnTeam.every(p => t.pokemon.includes(p))
                else
                    return t.pokemon.every(p => pokemonOnTeam.includes(p))
            })
            .filter(t => (pokemonNotOnTeam || []).every(p => !t.pokemon.includes(p)))

        console.log(`${selectedTeams.length} teams selected`)

        const aboveAverageSelectedTeams = selectedTeams
            .filter(t => (t.score >= teamStatistics.mean))

        console.log(`Much above average teams selected`)
        console.log(JSON.stringify(
            aboveAverageSelectedTeams
                .filter(t => (t.score >= (teamStatistics.mean + teamStatistics.standardDeviation)))
                .slice(0, 5),
            null,
            2
        ))

        console.log(`Above average teams selected`)
        console.log(JSON.stringify(
            aboveAverageSelectedTeams
                .filter(t => (t.score <= (teamStatistics.mean + teamStatistics.standardDeviation)))
                .slice(0, 5),
            null,
            2
        ))
    });