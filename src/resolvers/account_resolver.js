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
        accountByBalance: async (_, { balance }, { dataSources, rolIdToken, userIdToken }) => {
            role = (await dataSources.authAPI.getUser(userIdToken)).role
            if (rolIdToken == role && role == 1) {
                return await dataSources.accountAPI.accountByBalance(balance)
            } else {
                return null
            }
        },
        getAllAccount: async (_, __, { dataSources, rolIdToken, userIdToken }) => {
            role = (await dataSources.authAPI.getUser(userIdToken)).role
            if (rolIdToken == role && role == 1) {
                return await dataSources.accountAPI.getAllAccount()
            } else {
                return null
            }
        },
        getPokemon: async (_, { pokemonId }, { dataSources }) => {
            return await dataSources.accountAPI.getPokemonById(pokemonId)
        },
    },
    Mutation: {}
};

module.exports = accountResolver;