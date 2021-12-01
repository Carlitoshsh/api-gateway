const { gql } = require('apollo-server');

const pokemonTypeDefs = gql`
    type Ability {
        name: String!
        url: String!
    }

    type AbilityRoot {
        slot: Int!
        boolean: Boolean!
        ability: Ability
    }

    type Pokemon {
        id: Int!
        height: Int!
        weight: Int!
        name: String!
        abilities: [AbilityRoot]
    }

    extend type Query {
        getPokemon(pokemonId: Int!): Pokemon!
    }
`;

module.exports = pokemonTypeDefs;
