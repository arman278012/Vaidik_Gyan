import React, { useContext, useEffect, useState } from 'react'
import '../Styling/Login.css'
import { Link, useNavigate } from 'react-router-dom'
// import { useFormik } from 'formik'
// import { signUpSchema } from './Validations/FormValidations'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../Firebase/SetUp'
// import { AppContext } from './AuthContext'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { AppContext } from './AuthContext'
import { useDispatch, useSelector } from 'react-redux'
import { LoginItemsData } from '../redux/action'
import toast from 'react-hot-toast'

const Login = () => {

    const { hideNav, setHideNav, setSuccessLoginCode,loginUser, setLoginUser } = useContext(AppContext)
    const Navigate = useNavigate()

    

    const dispatch = useDispatch()
    const status_code = useSelector((pre) => pre.reducer.status)
    console.log(status_code)
    if (status_code == 200) {
        setSuccessLoginCode(status_code)
        setHideNav(false)
        toast.success("Login Successfull...")
        Navigate('/')
    }
    // else {
    //     alert("Invalid mobile or password")
    // }

    const clickHander = () => {
        setLoginUser((prevUser) => ({
            ...prevUser,
            mobileNo: `${prevUser.mobileNo.slice(3)}`,
        }));
    };

    useEffect(() => {
        console.log(loginUser);
        dispatch(LoginItemsData(loginUser))
    }, [loginUser]);





    // const sendOtp = async () => {
    //     try {
    //         const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
    //         const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
    //         setUser1(confirmation)
    //         console.log(confirmation)
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    //     navigate('/otp')
    // }

    return (
        <div className='login-page'>
            <div className='flex gap-10 login-content'>
                <div className='left w-[40vw] h-auto relative  '>

                    {/*Logo image is here */}
                    <div className="logo  top-[42%] absolute right-[42%]">
                        <img src='images/Content(1).png' alt="" className='h-[120px] w-[120px]' />
                    </div>

                    {/*Vaidik gyan and store para-- */}

                    <div className='vaidik-gyan-para '>
                        <p className='text-[28px] font-bold top-[60%] absolute right-[29%] text-white para-1'>Vaidik Gyan & Store</p>
                        <p className='top-[65%] absolute right-[30%] text-white text-[16px] para-2'>Discover your faith,Shop and Divine</p>
                    </div>

                    {/*top-1 circle image is here */}
                    <div className='circle-1 absolute top-[-50px] left-[72px]'>
                        <img src='/images/sign-top-circle.png' alt="" />
                    </div>

                    {/*top-2 circle image is here */}
                    <div className='circle-2 absolute top-[157px] left-[429px]'>
                        <img src='/images/sign-2-circle.png' alt="" />
                    </div>

                    {/*top-3 circle image is here */}
                    <div className='circle-3 absolute top-[390px] left-[52px]'>
                        <img src='/images/sign-3-circle.png' alt="" />
                    </div>

                    {/*top-4 circle image is here */}
                    <div className='circle-4 absolute top-[653px] left-[401px]'>
                        <img src='/images/sign-4-circle.png' alt="" />
                    </div>

                    {/*top-5 circle image is here */}
                    <div className='circle-5 absolute top-[693px] left-[170px]'>
                        <img src='/images/sign-5-circle.png' alt="" />
                    </div>
                </div>


                <div className="right w-[60vw] mt-[150px]">
                    <div className="top-para bg-white mt-10">
                        <p className='font-semibold text-[36px] Login'>Login</p>
                        <p className='font-normal text-[20px] Welcome'>Welcome 👋,</p>
                        <p className='font-normal text-[20px] details'>Enter your details to login to the app.</p>
                    </div>

                    <form>
                        <div className='form'>
                            <div className='flex flex-col mt-4 gap-2'>
                                <p>Mobile Number</p>
                                <PhoneInput
                                    defaultCountry="IN"
                                    className='name-input w-[416px] h-[52px] p-4 phone-input'
                                    name="mobileNo"
                                    value={loginUser.mobileNo}
                                    onChange={(value) => setLoginUser({ ...loginUser, mobileNo: value })}
                                />
                            </div>

                            <div className='flex flex-col mt-4 gap-2'>
                                <p>Password</p>
                                <input type="password"
                                    placeholder='Password'
                                    className='name-input w-[416px] h-[52px] p-4 phone-input'
                                    name='password'
                                    // value={loginUser.password}
                                    onChange={(e) => setLoginUser({ ...loginUser, "password": e.target.value })}
                                />
                            </div>
                        </div>
                    </form>

                    <div className="mt-10 signup-btn">
                        <button onClick={clickHander}
                            className='signup-button flex justify-center items-center font-bold'>Sign Up</button>
                        {/* <br /> <div id='recaptcha'></div> */}
                    </div>

                    <p>Don't have an account? <span className='Already-have-an-account'>
                        <Link to={'/signup'} onClick={() => setHideNav(false)}>Sign In</Link> </span> </p>
                </div>
            </div>

        </div>
    )
}

export default Login