"use strict";
class APIClient {
    baseURL;
    apiKey;
    timeout;
    constructor(baseURL, apiKey, timeout) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }
    getAuthHeader() {
        return "Bearer " + this.apiKey;
    }
    sendRequest(path) {
        console.log("GET " + this.baseURL + path);
        console.log("Auth: " + this.getAuthHeader());
        console.log("Timeout: " + this.timeout + "ms");
    }
}
class UserAPIClient extends APIClient {
    getUsers() {
        console.log("Fetching users (timeout: " + this.timeout + "ms)");
        console.log("URL: " + this.baseURL + "/users");
    }
}
let client = new APIClient("https://api.staging.com", "key_secret_123", 5000);
console.log("Base URL:", client.baseURL);
client.sendRequest("/health");
