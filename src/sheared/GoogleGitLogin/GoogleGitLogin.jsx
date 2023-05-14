import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { authProviderContex } from '../../Provider/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleGitLogin = () => {
    const { GoogleLogin }=useContext(authProviderContex)
    const location=useLocation()
    const navigate=useNavigate()
    const from = location.state?.from?.pathname || "/"
    const handelGoogleLogin=()=>{
        GoogleLogin()
        .then(result=>{
            console.log(result.user);
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div >
            <div className="divider">OR</div>
            <div className='text-center mb-10 '>
                <button onClick={handelGoogleLogin} className="btn btn-circle btn-outline btn-primary mr-5">
                    <FaGoogle className='text-3xl'></FaGoogle>
                </button>
                <button className="btn btn-circle btn-outline ">
                    <FaGithub className='text-3xl'></FaGithub>
                </button>
            </div>
            
        </div>
    );
};

export default GoogleGitLogin;