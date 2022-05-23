declare const baseUrl = 'http://localhost:3003/api';
declare const query: {
    user: {
        getById: string;
        login: string;
        register: string;
        put: string;
    };
};
declare const DEFAULT_LIMIT = 20;
export { baseUrl, query, DEFAULT_LIMIT };
