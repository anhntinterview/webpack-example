import * as React from 'react';
import { useSWRConfig } from 'swr';
import { useNavigate } from 'react-router-dom';
import ListErrors from '../../../components/Common/ListErrors';
import { UserAPI } from '../../../lib/api/user';

interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
    const naviagte = useNavigate();
    const { mutate } = useSWRConfig();

    const [isLoading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState([]);
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [img, setImg] = React.useState('');

    const handleUsernameChange = React.useCallback(
        (e) => setUsername(e.target.value),
        []
    );
    const handleEmailChange = React.useCallback(
        (e) => setEmail(e.target.value),
        []
    );
    const handlePasswordChange = React.useCallback(
        (e) => setPassword(e.target.value),
        []
    );
    const handleBioChange = React.useCallback(
        (e) => setBio(e.target.value),
        []
    );
    const handleImgChange = React.useCallback(
        (e) => setImg(e.target.value),
        []
    );

    function handleSubmit(e) {
        e.preventDefault();
        console.log('xxx');
    }

    // const handleSubmit = async (e) => {
    // e.preventDefault();
    // setLoading(true);
    // try {
    //     const { data, status } = await UserAPI.register(
    //         username,
    //         email,
    //         password,
    //         bio,
    //         img
    //     );
    //     if (status !== 200 && data?.errors) {
    //         setErrors(data.errors);
    //     }
    //     if (data?.user) {
    //         window.localStorage.setItem('user', JSON.stringify(data.user));
    //         mutate('user', data.user);
    //         naviagte('/login', { replace: true });
    //     }
    // } catch (errors) {
    //     console.log(errors);
    // } finally {
    //     setLoading(false);
    // }
    // };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <fieldset className="form-group">
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Username"
                        />
                    </fieldset>
                    <fieldset className="form-group">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Email"
                        />
                    </fieldset>
                    <fieldset className="form-group">
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Password"
                        />
                    </fieldset>
                    <fieldset className="form-group">
                        <input
                            type="text"
                            value={bio}
                            onChange={handleBioChange}
                            placeholder="Bio"
                        />
                    </fieldset>
                    <fieldset className="form-group">
                        <input
                            type="text"
                            value={img}
                            onChange={handleImgChange}
                            placeholder="Img"
                        />
                    </fieldset>
                    <button disabled={isLoading}>Sign up</button>
                </fieldset>
            </form>
            <ListErrors errors={errors} />
        </div>
    );
};

export default Register;
