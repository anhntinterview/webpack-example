import {} from '@reduxjs/toolkit';
import { coreSliceApi } from 'core/redux/slice';
import { UserEntity } from 'shared/entity/user.entity';
import { RTKQStateItemDTO, RTKQStateDTO } from 'core/redux/app/type';

export const extendedApiSlice = coreSliceApi.injectEndpoints({
    endpoints: (builder) => ({}),
});

export const {} = extendedApiSlice;
