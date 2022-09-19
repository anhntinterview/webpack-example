import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coreSliceApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: () => ({}),
});

export default coreSliceApi.reducer;
