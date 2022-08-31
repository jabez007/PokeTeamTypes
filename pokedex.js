//https://pokeapi.co/
import Pokedex from 'pokedex-promise-v2';
import 'lodash.combinations';
import _ from 'lodash';

const BASESCORE = 18

export const pokedex = new Pokedex({
    protocol: 'https',
    timeout: 10 * 1000 * 60 // 10m
});

export async function getBaseTypes(baseScore = BASESCORE) {
    const types = await Promise.all(
        (await pokedex.getResource(`/api/v2/type/`)).results
            .map((type) => pokedex.getResource(`/api/v2/type/${type.name}/`))
    )

    return types
        .filter((t) => t.id <= baseScore)
        .map((t) => {
            t.damage_relations.damage_from_score =
                baseScore
                +
                t.damage_relations.double_damage_from.length
                -
                (0.5 * t.damage_relations.half_damage_from.length)
                -
                t.damage_relations.no_damage_from.length

            t.damage_relations.damage_to_score =
                baseScore
                +
                t.damage_relations.double_damage_to.length
                -
                (0.5 * t.damage_relations.half_damage_to.length)
                -
                t.damage_relations.no_damage_to.length

            return t
        })
}

export async function getDualTypes(baseScore = BASESCORE) {
    return _.combinations(await getBaseTypes(baseScore), 2)
        .map((dt) => {
            const _dt = {
                name: `${dt[0].name}/${dt[1].name}`,
                damage_relations: {
                    quadruple_damage_from: dt[0].damage_relations.double_damage_from
                        .filter((dt0_ddf) =>
                            dt[1].damage_relations.double_damage_from
                                .some((dt1_ddf) => dt0_ddf.name === dt1_ddf.name)
                        ),
                    double_damage_from: [...new Set(
                        dt[0].damage_relations.double_damage_from.concat(
                            dt[1].damage_relations.double_damage_from
                        )
                    )]
                        .filter((ddf) =>
                            (
                                dt[0].damage_relations.double_damage_from
                                    .every((dt0_ddf) => ddf.name !== dt0_ddf.name)
                                ||
                                dt[1].damage_relations.double_damage_from
                                    .every((dt1_ddf) => ddf.name !== dt1_ddf.name)
                            )
                            &&
                            (
                                dt[0].damage_relations.half_damage_from
                                    .every((dt0_hdf) => ddf.name !== dt0_hdf.name)
                                &&
                                dt[1].damage_relations.half_damage_from
                                    .every((dt1_hdf) => ddf.name !== dt1_hdf.name)
                                &&
                                dt[0].damage_relations.no_damage_from
                                    .every((dt0_ndf) => ddf.name !== dt0_ndf.name)
                                &&
                                dt[1].damage_relations.no_damage_from
                                    .every((dt1_ndf) => ddf.name !== dt1_ndf.name)
                            )
                        ),
                    double_damage_to: [...new Set(
                        dt[0].damage_relations.double_damage_to.concat(
                            dt[1].damage_relations.double_damage_to
                        )
                    )],
                    half_damage_from: [...new Set(
                        dt[0].damage_relations.half_damage_from.concat(
                            dt[1].damage_relations.half_damage_from
                        )
                    )]
                        .filter((hdf) =>
                            (
                                dt[0].damage_relations.half_damage_from
                                    .every((dt0_hdf) => hdf.name !== dt0_hdf.name)
                                ||
                                dt[1].damage_relations.half_damage_from
                                    .every((dt1_hdf) => hdf.name !== dt1_hdf.name)
                            )
                            &&
                            (
                                dt[0].damage_relations.double_damage_from
                                    .every((dt0_ddf) => hdf.name !== dt0_ddf.name)
                                &&
                                dt[1].damage_relations.double_damage_from
                                    .every((dt1_ddf) => hdf.name !== dt1_ddf.name)
                                &&
                                dt[0].damage_relations.no_damage_from
                                    .every((dt0_ndf) => hdf.name !== dt0_ndf.name)
                                &&
                                dt[1].damage_relations.no_damage_from
                                    .every((dt1_ndf) => hdf.name !== dt1_ndf.name)
                            )
                        ),
                    half_damage_to: [...new Set(
                        dt[0].damage_relations.half_damage_to.concat(
                            dt[1].damage_relations.half_damage_to
                        )
                    )],
                    quarter_damage_from: dt[0].damage_relations.half_damage_from
                        .filter((dt0_hdf) =>
                            dt[1].damage_relations.half_damage_from
                                .some((dt1_hdf) => dt0_hdf.name === dt1_hdf.name)
                        ),
                    no_damage_from: [...new Set(
                        dt[0].damage_relations.no_damage_from.concat(
                            dt[1].damage_relations.no_damage_from
                        )
                    )],
                    no_damage_to: [...new Set(
                        dt[0].damage_relations.no_damage_to.concat(
                            dt[1].damage_relations.no_damage_to
                        )
                    )]
                },
                pokemon: dt[0].pokemon
                    .filter((dt0_p) =>
                        dt[1].pokemon
                            .some((dt1_p) => dt0_p.pokemon.name === dt1_p.pokemon.name)
                    )
            }

            _dt.damage_relations.damage_from_score =
                baseScore
                +
                (3 * _dt.damage_relations.quadruple_damage_from.length)
                +
                _dt.damage_relations.double_damage_from.length
                -
                (0.5 * _dt.damage_relations.half_damage_from.length)
                -
                (0.75 * _dt.damage_relations.quarter_damage_from.length)
                -
                _dt.damage_relations.no_damage_from.length

            _dt.damage_relations.damage_to_score =
                baseScore
                +
                _dt.damage_relations.double_damage_to.length
                -
                (0.5 * _dt.damage_relations.half_damage_to.length)
                -
                _dt.damage_relations.no_damage_to.length

            return _dt
        })
        .filter((dt) => dt.pokemon.length > 0)
}

export async function getResistantTypes({
    baseScore = BASESCORE,
    typeFilters = { minimumDamageTo: false, allowQuadrupleDamage: true },
    pokemonFilters = { allowMegas: false, ignoreRotoms: false, ignoreHisui: true },
    statsFilters = { minimumStatsTotal: 500, minimumAttacks: 90, minimumDefenses: 70 }
} = {}) {
    const _typeFilters = {
        minimumDamageTo: false,
        allowQuadrupleDamage: true,
        ...typeFilters
    }
    const _pokemonFilters = {
        allowMegas: false,
        ignoreRotoms: false,
        ignoreHisui: true,
        ...pokemonFilters
    }
    const _statsFilters = {
        minimumStatsTotal: 500,
        minimumAttacks: 90,
        minimumDefenses: 70,
        ...statsFilters
    }

    return (await Promise.all(
        (await getBaseTypes(baseScore))
            .concat(await getDualTypes(baseScore))
            .filter((t) =>
                t.damage_relations.damage_from_score <= baseScore
                &&
                (
                    (!(_typeFilters.minimumDamageTo) || t.damage_relations.damage_to_score >= baseScore)
                    &&
                    t.damage_relations.damage_to_score > t.damage_relations.damage_from_score
                )
                &&
                (
                    (
                        _typeFilters.allowQuadrupleDamage // but it's the only vulnerability
                        &&
                        (t.damage_relations.quadruple_damage_from || []).length === 1
                        &&
                        (t.damage_relations.double_damage_from || []).length === 0
                    )
                    ||
                    (t.damage_relations.quadruple_damage_from || []).length === 0
                )
            )
            .map(async (t) => ({
                name: t.name,
                weaknesses: (t.damage_relations.quadruple_damage_from || [])
                    .concat(t.damage_relations.double_damage_from)
                    .map((w) => w.name),
                resistances: (t.damage_relations.no_damage_from || [])
                    .concat(t.damage_relations.quarter_damage_from || [])
                    .concat(t.damage_relations.half_damage_from)
                    .map((r) => r.name),
                damage_from_score: t.damage_relations.damage_from_score,
                coverages: (t.damage_relations.double_damage_to || [])
                    .map((c) => c.name),
                damage_to_score: t.damage_relations.damage_to_score,
                pokemon: await (async function() {
                    const _pokemon = await Promise.all(
                        t.pokemon
                            .map(async (p) => {
                                if (
                                    (!(_pokemonFilters.allowMegas) && p.pokemon.name.includes('-mega'))
                                    ||
                                    (_pokemonFilters.ignoreRotoms && p.pokemon.name.includes('rotom-'))
                                    ||
                                    (_pokemonFilters.ignoreHisui && (
                                        p.pokemon.name.includes('-hisui')
                                        ||
                                        p.pokemon.name.includes('basculegion')
                                        ||
                                        p.pokemon.name.includes('overqwil')
                                    ))
                                ) {
                                    return null
                                }
                                //
                                const id = Number(p.pokemon.url.split("/").slice(-2)[0])
                                const poke = await pokedex.resource(`/api/v2/pokemon/${id}/`)
                                const speciesId = Number(poke.species.url.split("/").slice(-2)[0])
                                const species = await pokedex.resource(`/api/v2/pokemon-species/${speciesId}/`)
                                //
                                if (
                                    (species.is_legendary || species.is_mythical)
                                    ||
                                    species.egg_groups.every((eg) => eg.name === 'no-eggs')
                                ) {
                                    return null
                                }
                                //
                                p.types = poke.types
                                p.stats = poke.stats
                                    .reduce((merged, curr) => {
                                        merged[curr.stat.name] = curr.base_stat
                                        return merged
                                    }, {})
                                if (p.stats.attack < _statsFilters.minimumAttacks
                                    &&
                                    p.stats['special-attack'] < _statsFilters.minimumAttacks
                                ) {
                                    return null
                                }
                                if ((p.stats.defense + p.stats['special-defense']) / 2 < _statsFilters.minimumDefenses) {
                                    return null
                                }
                                p.stats_total = poke.stats
                                    .reduce((total, curr) => {
                                        return (total + curr.base_stat)
                                    }, 0)
                                if (p.stats_total < _statsFilters.minimumStatsTotal) {
                                    return null
                                }
                                return p
                            })
                    )

                    return _pokemon
                        .filter((p) => !!p)
                        .filter((p) => t.name.includes("/") || p.types.length === 1)
                        .sort((p1, p2) => p2.stats_total - p1.stats_total)
                })()
            }))
    ))
        .filter((t) => t.pokemon.length > 0)
        .sort((t1, t2) =>
            (t2.damage_to_score / t2.damage_from_score)
            -
            (t1.damage_to_score / t1.damage_from_score)
        )
}

export function generateTeams({
    types = [],
    teamSize = 6,
    teamComposition = { allowSharedTypes: true, allowSharedWeaknesses: true, coverWeaknesses: false }
} = {}) {
    const _teamComposition = {
        allowSharedTypes: true,
        allowSharedWeaknesses: true,
        coverWeaknesses: false,
        ...teamComposition
    }

    const damageToScores = types.map(t => t.damage_to_score)
    const maxDamageToScore = Math.max(...damageToScores)
    const minDamageToScore = Math.min(...damageToScores)

    const damageFromScores = types.map(t => t.damage_from_score)
    const maxDamageFromScore = Math.max(...damageFromScores)
    const minDamageFromScore = Math.min(...damageFromScores)

    for (let i = 0; i < types.length; i++) {
        types[i] = {
            ...types[i],
            normalized_damage_from_score:
                (types[i].damage_from_score - minDamageFromScore)
                /
                (maxDamageFromScore - minDamageFromScore),
            normalized_damage_to_score:
                (types[i].damage_to_score - minDamageToScore)
                /
                (maxDamageToScore - minDamageToScore)
        }
    }

    function teamCombinations(typs, size) {
        if (size === 0) {
            return [[]]
        }
        if (typs.length === 0) {
            return []
        }
        const currentType = typs[0]
        return teamCombinations(
            typs
                .slice(1)
                .filter((t) =>
                    (
                        _teamComposition.allowSharedTypes
                        ||
                        currentType.name.split("/")
                            .every((n) => !t.name.includes(n))
                    )
                    &&
                    (
                        _teamComposition.allowSharedWeaknesses
                        ||
                        currentType.weaknesses
                            .every((w) => !t.weaknesses.includes(w))
                    )
                    &&
                    (
                        !(_teamComposition.coverWeaknesses)
                        ||
                        currentType.weaknesses
                            .some((w) => t.coverages.includes(w))
                        ||
                        currentType.coverages
                            .some((c) => t.weaknesses.includes(c))
                    )
                ),
            size - 1
        )
            .map((m) => [currentType].concat(m))
            .concat(teamCombinations(typs.slice(1), size))
    }

    return teamCombinations(types, teamSize)
        .map((tm) => ({
            types: tm
                .map((t) => t.name),
            typesTotal: (
                new Set(tm
                    .flatMap((t) => t.name.split("/"))
                )
            ).size,
            pokemon: tm
                .map((t) => t.pokemon[0].pokemon.name),
            score: tm
                .map((t) => (
                    t.pokemon[0].stats.hp
                    +
                    (
                        (
                            t.pokemon[0].stats.attack
                            +
                            t.pokemon[0].stats['special-attack']
                        )
                        *
                        t.normalized_damage_to_score
                    )
                    +
                    (
                        (
                            t.pokemon[0].stats.defense
                            +
                            t.pokemon[0].stats['special-defense']
                        )
                        /
                        (1 + t.normalized_damage_from_score)
                    )
                    +
                    t.pokemon[0].stats.speed
                ))
                .reduce((a, b) => a + b)
        }))
        .sort((t1, t2) => t2.score - t1.score)
}