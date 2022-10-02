import * as React from 'react';
import { BaseComponent } from '../../../core/component/base';
import LoginModel from './login.model';
import { LoginBodyRO } from '../../../shared/interface/user.interface';

// interface ILoginProps {
//     model: LoginModel;
// }

// export default class Login extends BaseComponent({
//     model: new LoginModel(),
// })<ILoginProps> {
//     baseElement = (props: ILoginProps) => {
//         console.log(Object.values(props));

//         return (
//             <>
//                 <h1>
//                     Welcome come to APPLICATION! Please Login to access the
//                     system.
//                 </h1>
//                 {/* <button onClick={props.model.login}>Login</button> */}
//             </>
//         );
//     };
// }

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    const model = new LoginModel();

    return (
        <>
            <h1>
                Welcome come to APPLICATION! Please Login to access the system.
            </h1>
            {/* <button onClick={model.login}>Login</button> */}
        </>
    );
};

export default Login;
