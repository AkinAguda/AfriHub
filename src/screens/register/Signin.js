import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import SignupImage from "../../assets/svgs/Group 654.svg";
import {ReactComponent as GoogleIcon} from "../../assets/svgs/Group.svg";
import {ReactComponent as LockIcon } from "../../assets/svgs/lock.svg";
import { ReactComponent as EmailIcon } from "../../assets/svgs/email.svg";
import "./Signin.css";


function Signin() {
    return (
    <div className = "signin" >
    <div className="md:container md:mx-auto">
      <Navbar />
        <div className="signin">
        <div className="signin__left">
          <h2 className="signin__title">
            Welcome Back!
          </h2>
          <p className="signin__secondTitle">
            Enter your details to sign in
          </p>
          <div className='signin__form'>
            <form>
                  <div className='signin__input mt-6 signin__icons'>
                    <EmailIcon />
                  <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter Your Email address'
                />
              </div>
                  <div className='signin__input mt-6 signin__icons'>
                    <LockIcon />
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Enter Your Password'
                />
              </div>
              
                <div className='signin__input mt-6'>
                  <button>
                  Sign In
              </button>
                  <p className="signin__dec mt-6">OR</p>   
              </div>
              <button  className="signin__googleButton"> <GoogleIcon /> Sign In With Google </button>
            </form>
          </div>
        </div>
        <div className="signup__right">
          <img src={SignupImage} alt="SignupImage" />
        </div>
        </div>
        </div>
        </div>
      
       
    )
        
    
}

export default Signin
