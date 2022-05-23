const baseUrl = 'http://localhost:3003/api';
const query = {
    user: {
        getById: '/user',
        login: '/users/login',
        register: '/users',
        put: '/user',
    },
};

const DEFAULT_LIMIT = 20;

export { baseUrl, query, DEFAULT_LIMIT };
