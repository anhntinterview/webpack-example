import { Container } from 'typedi';
import { validateSync, ValidationError } from 'class-validator';
import { LoginBodyRO } from '../../../shared/interface/user.interface';
import UserService from '../../../template/service/user.service';

class LoginModel {
    public readonly userService = Container.get(UserService);

    public get isLogin() {
        return;
    }
    public loginBodyDto: LoginBodyRO = {
        user: { username: 'robert@cnbc.com', password: '1' },
    };

    // public login = () => {
    //     this.userService.login(this.loginBodyDto);
    // };

    // public loginResult = () => {
    //     return this.userService.loginResult;
    // };

    constructor() {}
}

export default LoginModel;
