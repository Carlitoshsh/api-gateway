const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class AuthAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async createUser(user) {
        console.log("\n-*-*- Paso 2 - Llamando DataSource Auth_ms");
        console.log("\n👀 Objeto enviado crear usuario\n", user)
        // user = new Object(JSON.parse(JSON.stringify(user)));
        // console.log("🤷‍♀️ Despues", user)
        return await this.post(`/user/`, user);
    }

    async getUser(userId) {
        console.log("\n-*-*- Paso 2 - Llamando DataSource Auth_ms");
        console.log("\n👀 Objeto enviado obtener usuario\n", userId)
        return await this.get(`/user/${userId}`);
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token);
    }
}

module.exports = AuthAPI;

