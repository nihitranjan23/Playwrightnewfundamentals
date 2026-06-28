interface APIResponse {
    body: string;
    headers?: object;  //? is used that header is optional
    responseTime?: number;

}

let response1: APIResponse = {
    body: 'Hi',
};

let response2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400
};