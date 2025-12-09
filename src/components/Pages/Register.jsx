import React, { use, useRef, useState } from 'react';

import { Link, Navigate, useNavigate } from 'react-router';

import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';



const Register = () => {

    const { createUser, signInWithGoogle, setUser } = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false)

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const photoRef = useRef(null);
    const passwordRef = useRef(null);


    const handleKeyDown = (e, nextField) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (nextField) {
                nextField.current.focus();

            }
        }
    }


    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.photoUrl.value;



        const sixPattern = /^.{6,}$/;
        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;


        if (!sixPattern.test(password)) {
            console.log('password not match');
            setError('Password must be six character')
            return;
        }
        else if (!casePattern.test(password)) {
            setError('password must have at least one uppercase and lowercase character')
            return;
        }


        setError('');
        setSuccess(false);



        // const newUser = { name, email, image }
        // console.log(newUser)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                const updateUser = { ...user, displayName: name, photoURL: image }
                setUser(updateUser);
                navigate("/login");
            })
            .catch(error => {
                alert(error.message);
            });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {

                // console.log(result.user);
                const user = result.user;
                setUser(user);
                navigate('/')

            })
            .catch(error => {
                console.log(error);

            })
    }

    // Handle password show
    const handlePasswordShow = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }




    return (
        <div className='w-full bg-[#bdd7e7]'>
            <div className="hero pt-20 w-11/12 mx-auto ">

                <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body py-8">
                        <h1 className="text-3xl font-bold text-center">Register now!</h1>

                        <p className='text-center  text-gray-600 font-stretch-90%'>Already have an account?<Link to='/login' className='text-blue-700 font-stretch-90% underline'>Login Now</Link></p>


                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">

                                {/* Name */}
                                <label className="label font-semibold text-gray-600 font-stretch-90%">Name</label>
                                <input ref={nameRef}
                                    onKeyDown={(e) => handleKeyDown(e, emailRef)}

                                    type="text" className="input" name='name' placeholder="Enter your name" />

                                {/* Email */}
                                <label className="label font-semibold text-gray-600 font-stretch-90%">Email</label>
                                <input ref={emailRef}
                                    onKeyDown={(e) => handleKeyDown(e, photoRef)}

                                    type="email" className="input" name='email' placeholder=" Enter your email" />

                                {/* Photo URL */}
                                <label className="label font-semibold text-gray-600 font-stretch-90%">Photo-URL</label>
                                <input ref={photoRef}
                                    onKeyDown={(e) => handleKeyDown(e, passwordRef)}

                                    type="text" className="input" name='photoUrl' placeholder="Photo-URL" />

                                {/* Password */}
                                <label className="label font-semibold text-gray-600 font-stretch-90%">Password</label>
                                <div className="relative w-full">
                                    <input

                                        ref={passwordRef}


                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="input  focus:outline-blue-500"
                                        placeholder="Password"
                                    />

                                    <button
                                        type="button"
                                        onClick={handlePasswordShow}
                                        className="absolute inset-y-0 right-6 flex items-center text-gray-600 cursor-pointer"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>

                                <button className="btn text-white bg-blue-700 mt-3  font-bold">Register</button>
                            </fieldset>

                            {
                                success && <p className='text-green-500'>Account created successfully.</p>

                            }

                            {
                                error && <p className='text-red-500'>{error}</p>
                            }

                        </form>

                        <div className="flex items-center justify-center">
                            <span className="w-full border-t"></span>
                            <span className="mx-2 text-gray-500 text-sm">OR</span>
                            <span className="w-full border-t"></span>
                        </div>
                        <button onClick={handleGoogleSignIn} className="btn  mt-4 bg-gray-300">
                            <FcGoogle size={24}></FcGoogle>
                            Sign in With Google
                        </button>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Register;