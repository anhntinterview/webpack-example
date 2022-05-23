import axios from 'axios';

import { baseUrl, query } from '../constant';

export const UserAPI = {
    register: async (username, password, email, bio, img) => {
        console.log('xxxx');
        try {
            console.log(`${baseUrl}${query.user.register}`);
            console.log(username, email, password, bio, img);

            const response = await axios.post(
                `${baseUrl}${query.user.register}`,
                JSON.stringify({
                    user: { username, email, password, bio, img },
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response;
        } catch (error) {
            return error.response;
        }
    },
};
