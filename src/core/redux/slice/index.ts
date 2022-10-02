import {
    // createApi,
    fetchBaseQuery,
    buildCreateApi,
    coreModule,
    reactHooksModule,
} from '@reduxjs/toolkit/query/react';
// import { selectLoginResult } from '../../../redux/user/slice/selector';
// import { LoginBodyRO, UserRO } from '/src/shared/interface/user.interface';
import { PostDTO, RTKQStateDTO } from '../../../shared/dto/post.dto';
// import { HYDRATE } from 'next-redux-wrapper';

// TODO: SSR
const createApi = buildCreateApi(
    coreModule(),
    reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const coreSliceApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    // extractRehydrationInfo(action, { reducerPath }) {
    //     if (action.type === HYDRATE) {
    //         return action.payload[reducerPath];
    //     }
    // },
    tagTypes: ['Posts', 'Users', 'Events'],
    endpoints: (builder) => ({
        getPosts: builder.query<Array<PostDTO>, void>({
            query: () => '/articles',
            // providesTags: ["Post"],
            transformResponse(rawResult: RTKQStateDTO<PostDTO>, meta, arg) {
                return rawResult.list;
            },
            providesTags: (result) => {
                return result
                    ? [
                          ...result.map(({ id }) => ({
                              type: 'Posts' as const,
                              id,
                          })),
                          { type: 'Posts', id: 'LIST' },
                      ]
                    : [{ type: 'Posts', id: 'LIST' }];
            },
        }),
    }),
});

export const apiResult = async () => {
    return await Promise.all(coreSliceApi.util.getRunningOperationPromises());
};

export const { useGetPostsQuery } = coreSliceApi;

export default coreSliceApi.reducer;

// export const coreSliceApi = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'http://localhost:3000',
//         prepareHeaders: (headers, { getState }) => {
//             const token = selectLoginResult;
//             console.log(`token: `, token);

//             return { ...headers, 'Content-Type': 'application/json' };
//         },
//     }),
//     tagTypes: ['Posts', 'Users', 'Events'],
//     endpoints: (builder) => ({
//         login: builder.mutation({
//             query: (accountLogin: LoginBodyRO) => ({
//                 url: '/users/login',
//                 method: 'POST',
//                 body: accountLogin,
//             }),
//             transformResponse(rawResult: UserRO, meta, arg) {
//                 return rawResult;
//             },
//         }),
//     }),
//     // endpoints: () => ({}),
// });

// export default coreSliceApi.reducer;
