import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import SignupImage from "../../assets/svgs/Group 654.svg";
import {ReactComponent as GoogleIcon} from "../../assets/svgs/Group.svg";
import {ReactComponent as UserIcon } from "../../assets/svgs/username.svg";
import {ReactComponent as LockIcon } from "../../assets/svgs/lock.svg";
import {ReactComponent as EmailIcon } from "../../assets/svgs/email.svg";
import "./Register.css";


function Register() {

  return (
      
    <div className="register">
    <div className="md:container md:mx-auto">
      <Navbar />
      <div className="signup">
        <div className="signup__left">
          <h2 className="signup__title">
            Welcome to Afri<span>hub</span>.
          </h2>
          <p className="signup__secondTitle">
            Register to get started.
          </p>
          <div className='signup__form'>
            <form>
                <div className='signup__input mt-6  signup__icons' >
                 <UserIcon />
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="mt-4"
                    placeholder="Enter Your Fullname"
          
                />
              </div>
                <div className='signup__input mt-6 signup__icons'>
                  <EmailIcon />
                  <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter Your email address'
                />
              </div>
                <div className='signup__input mt-6  signup__icons'>
                  <LockIcon />
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Enter Your Password'
                />
              </div>
                <p className="signup__dec mt-6">By signing up you agree to the <span>terms and conditions</span> and <span>privacy policy </span> for the website.</p>
                
                <div className='signup__input mt-6'>
                  <button>
                  Sign Up
              </button>
                  <p className="signup__dec mt-6">OR</p>   
              </div>
              <button  className="signup__googleButton"> <GoogleIcon /> Sign up With Google </button>
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


export default Register
