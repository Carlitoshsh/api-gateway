const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class AccountAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.account_api_url;
    }

    async createAccount(account) {
        console.log("\n-*-*- Paso 2 - Llamando DataSource Account_ms");
        console.log("\n🤑 Objeto enviado crear cuenta\n", account)
        return await this.post('/accounts', account);
    }

    async accountByUsername(username) {
        return await this.get(`/accounts/${username}`);
    }

    async createTransaction(transaction) {
        console.log("\n-*-*- Paso 2 - Llamando DataSource Account_ms");
        console.log("\n🤑 Objeto enviado transaction\n", transaction)
        return await this.post('/transactions', transaction);
    }

    async transactionByUsername(username) {
        return await this.get(`/transactions/${username}`);
    }
}
module.exports = AccountAPI;