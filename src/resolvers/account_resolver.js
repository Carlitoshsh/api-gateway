const accountResolver = {
    Query: {
        accountByUsername: async (_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.accountAPI.accountByUsername(username)
            else
                return null

        },
        // Implementar un admin
        accountByBalance: async (_, { balance }, { dataSources }) => {
            return await dataSources.accountAPI.accountByBalance(balance)
        },
        getAllAccount: async (_, __, { dataSources }) => {
            return await dataSources.accountAPI.getAllAccount()
        },
        getPokemon: async (_, { pokemonId }, { dataSources }) => {
            return await dataSources.accountAPI.getPokemonById(pokemonId)
        },
    },
    Mutation: {}
};

module.exports = accountResolver;