import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {

    const { signIn, setUser, signInWithGoogle } = use(AuthContext)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();


    const emailRef = useRef(null);

    const passwordRef = useRef(null);

    const handleKeyDown = (e, nextField) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (nextField) {
                nextField.current.focus();

            }
        }
    }

    const handleLogIn = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user);
                setSuccess("Login successfully");

                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorMessage, errorCode)
                setError("Wrong Password! Enter correct password", errorCode);
            })

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

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        navigate(`/forgotPassword?email=${encodeURIComponent(email)}`);
    };

    // password show
    const handlePasswordShow = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }


    return (
        <div className='bg-[#bdd7e7] py-5'>
            <div className='flex  justify-center items-center min-h-screen my-6'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6 mt-6">

                    <h2 className='font-semibold text-2xl md:text-3xl text-center'>Login Now!</h2>

                    <p className=' text-center  text-gray-600 mt-3'>Don’t Have An Account ? <Link to='/register' className='text-secondary  underline'>Register</Link></p>


                    <form onSubmit={handleLogIn} className="card-body">
                        <fieldset className="fieldset">

                            {/* Email */}
                            <label className="label font-semibold text-gray-600 font-stretch-90%">Email</label>
                            <input ref={emailRef}
                                onKeyDown={(e) => handleKeyDown(e, passwordRef)}

                                type="email" className="input" name='email' placeholder=" Enter your email" required />

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

                            <div>
                                <button onClick={handleForgotPassword} className="link link-hover">Forgot password?</button>
                            </div>

                            {
                                error && <p className='text-red-400'>{error}</p>
                            }

                            {
                                success && <p className='text-green-500'>{success}</p>
                            }

                            <button type='submit' className="btn btn-primary mt-4">Login</button>


                            <div className="flex items-center justify-center">
                                <span className="w-full border-t"></span>
                                <span className="mx-2 text-gray-500 text-sm">OR</span>
                                <span className="w-full border-t"></span>
                            </div>
                            <button onClick={handleGoogleSignIn} className="btn  mt-4 bg-gray-300">
                                <FcGoogle size={24}></FcGoogle>
                                Sign in With Google
                            </button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;