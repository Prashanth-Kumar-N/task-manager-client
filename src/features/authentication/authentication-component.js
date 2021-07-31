import { useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';

export const AuthComponent = () => {
    const isSignedIn = useSelector( state => state.auth.isSignedIn);
    return (
        <section class='login-signup'>
            {isSignedIn && <Redirect to='/tasks'/>}
        </section>
    )
}