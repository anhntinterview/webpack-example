import * as React from 'react';
import { BaseComponent } from '../../../core/component/base';
import Login from '../../components/login';

class LoginPage extends BaseComponent({
    style: {},
})<{}> {
    baseElement = () => <Login />;
}

export default LoginPage;
