import { configureStore } from '@reduxjs/toolkit';
import coreSliceApiReducer, { coreSliceApi } from 'core/redux/slice';

export const store = configureStore({
    reducer: {
        [coreSliceApi.reducerPath]: coreSliceApiReducer,
    },
});
