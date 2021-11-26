const { ApolloError } = require('apollo-server');
const serverConfig = require('../server');
const fetch = require('node-fetch');

const authentication = async ({ req }) => {

    const token = req.headers.authorization || '';
    console.log("\n-*-*- 0️⃣- Llamando contexto de autenticacion...");

    if (token == '')
        return { userIdToken: null }
    else {
        try {
            let requestOptions = {
                method: 'POST', headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }), redirect: 'follow'
            };
            let response = await fetch(
                `${serverConfig.auth_api_url}/verifyToken/`,
                requestOptions)
            if (response.status != 200) {
                console.log(response)
                throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401)
            }
            console.log("\n-*-*- 0️⃣😊- Llamando contexto de autenticacion resuelto ");
            return { userIdToken: (await response.json()).UserId };
        }
        catch (error) {
            throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
        }
    }
}

module.exports = authentication;
