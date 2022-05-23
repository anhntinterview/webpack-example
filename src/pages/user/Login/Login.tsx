import { useState } from 'react';

import ListErrors from 'components/Common/ListErrors';

export interface ILoginProps {}

export function Login(props: ILoginProps) {
    const [errors, seterrors] = useState();
    return (
        <>
            <ListErrors errors={errors} />
        </>
    );
}
