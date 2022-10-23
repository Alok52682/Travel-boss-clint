import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Routers/UserContext';

const Login = () => {
    const { signInWithGoogle, signInWithGithub, userSignIn, handleForgetPass } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const HandleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.log('error', error))
    }

    const googleSignIn = () => {
        signInWithGoogle()
            .then(result => console.log(result.user))
            .catch(error => console.log('error', error))
    }
    const githubSignIn = () => {
        signInWithGithub()
            .then(result => console.log(result.user))
            .catch(error => console.log('error', error))
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6"> Login and get access to Booking luxurious hotels information and location.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={HandleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleEmailBlur} type="text" name='email' placeholder="Enter your email address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type='password' name='password' placeholder="Enter your password" className="input input-bordered" />
                            <label className="label">
                                <Link onClick={() => handleForgetPass(userEmail)} className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                            <p className="label-text">Create a new account? <Link className='text-primary underline font-semibold' to='/register'>Register</Link></p>
                        </div>
                    </form>
                    <button onClick={googleSignIn} className="btn btn-outline btn-primary m-1"><FaGoogle /> Log in with google</button>
                    <button onClick={githubSignIn} className="btn btn-outline btn-primary m-1"><FaGithub /> Log in with github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;