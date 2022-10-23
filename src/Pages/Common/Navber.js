import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Routers/UserContext';

const Navber = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-blur lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost bg-blur text-white font-extrabold normal-case text-xl">Travel Boss</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/' className=' bg-blur text-white mr-5'>Home</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user?.uid ?
                        <ul className="menu menu-horizontal gap-2 p-0">
                            <li><Link to='/login' className='btn bg-blur text-white'>Log In</Link></li>
                            <li><Link to='/register' className='btn bg-blur text-white'>Register</Link></li>
                        </ul>
                        :
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt='Profile' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><Link onClick={() => logOut()}>Log Out</Link></li>
                            </ul>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navber;