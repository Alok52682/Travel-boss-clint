import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Routers/UserContext';

const Register = () => {

    const { createUser, updateUserProfile, userVarification } = useContext(AuthContext);
    const [userProfile, setUserProfile] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const photoURL = form.photourl.value;
        const username = form.username.value;
        const email = userProfile.email;
        const password = userProfile.password;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                userVarification()
                    .then(() => alert('Check Your email for varify!!'))
                    .catch(error => console.log('error', error))
                updateUserProfile(username, photoURL)
                    .then(() => { })
                    .catch(error => console.log('error', error))
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => console.log('error', error))
    }

    const handelOnChangeEmail = event => {
        let email = event.target.value;
        setUserProfile({ ...userProfile, email: email });
        email = "";
    }
    const handelOnChangePassword = event => {
        const email = event.target.value;
        setUserProfile({ ...userProfile, password: email });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <form onSubmit={handelRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" name='username' placeholder="Username" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photourl' placeholder="Drop Your Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handelOnChangeEmail} type="email" name='email' placeholder="Enter your email address" className="input input-bordered" value={userProfile.email} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handelOnChangePassword} type="password" name='password' placeholder="Enter your password" className="input input-bordered" value={userProfile.password} required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                            <p className="label-text">Already have an account? <Link className='text-primary underline font-semibold' to='/login'>Log In</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;