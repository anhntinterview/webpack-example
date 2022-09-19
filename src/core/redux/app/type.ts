import { Action, ThunkAction } from '@reduxjs/toolkit';
import { store } from 'core/redux/app/store';
import { STATUS } from 'core/redux/app/constant';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export class RTKQStateItemDTO<T> {
    readonly [name: string]: T;
}

export class RTKQStateDTO<T> {
    readonly list!: Array<T>;
    readonly count!: number;
}

export class StateDTO<T> {
    readonly data!: { list: Array<T>; count: number };
    readonly status!: STATUS;
    readonly error?: any;
}
