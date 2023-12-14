import React, { useContext, useEffect, useState } from 'react'
import '../Styling/SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { signUpSchema } from './Validations/FormValidations'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { AppContext } from './AuthContext'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../Firebase/SetUp'
import PhoneInput from 'react-phone-number-input'
import { useDispatch, useSelector } from 'react-redux'
import { PostItemsData } from '../redux/action'

const SignUp = () => {
    const dispatch = useDispatch()
    const dt = useSelector((pre) => pre.reducer.status)
    console.log(dt)
    const { phone, setPhone, setUser1, setHideNav, user, setUser, setCheckSignupLogin } = useContext(AppContext)
    // const dispatch = useDispatch()

    console.log("phone number", phone)

    const navigate = useNavigate();

    {/*Send otp code is written here */ }
    const sendOtp = async () => {
        try {
            console.log("inside try block")
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            setUser1(confirmation)
            console.log(confirmation)
        }
        catch (err) {
            console.log(err)
        }
        navigate('/otp')
        // console.log("send otp function is called...")
    }


    const [formErrors, setFormErrors] = useState({
        fullName: "",
        mobileNumber: "",
        emailId: "",
        password: "",
        confirm_password: "",
        accepted: false,
    })

    const handleBlur = async (e) => {
        const { name, value } = e.target;
        try {
            await Yup.reach(signUpSchema, name).validate(value);
            setFormErrors({
                ...formErrors,
                [name]: '',
            })
        } catch (error) {
            setFormErrors({
                ...formErrors,
                [name]: error.message,
            })
        }
    }

    // console.log(user)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fullName, mobileNo, email, password, confirm_password, accepted } = user;

        const response = await fetch
            (
                "https://vaidikgyanandstore-default-rtdb.firebaseio.com/vaidik_stores_Datas.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullName,
                        mobileNo,
                        email,
                        password,
                        confirm_password,
                        accepted
                    })
                }
            )


        try {
            await signUpSchema.validate(user, { abortEarly: false })
            console.log('form submitted', user)
        }
        catch (error) {
            const errors = {};
            error.inner.forEach((err) => {
                errors[err.path] = err.message;
            })
            setFormErrors(errors)
        }
        navigate('/otp')
    }

    const mobileFun = () => {
        user.mobileNo = phone
    }

    const callBothFunctions = (e) => {
        // handleSubmit(e);
        mobileFun()
        dispatch(PostItemsData(user))

        if (dt >= 400 && dt <= 499) {
            toast.success("User is already Register...")
        } else {


            sendOtp();
            setCheckSignupLogin(1)
            // dispatch(PostItemsData(user))
            setHideNav(false)
        }


    }

    return (
        <div className='signup-page'>
            <div className='flex gap-10 signup-content'>
                <div className='left w-[40vw] h-auto relative  '>

                    {/*Logo image is here */}
                    <div className="logo  top-[42%] absolute right-[42%]">
                        <Link to={'/'}><img src='/images/Content(1).png' alt="" className='h-[120px] w-[120px]' /></Link>
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

                <div className='right w-[60vw]'>
                    <div className="top-para bg-white mt-10">
                        <p className='font-semibold text-[36px] Sign-Up'>Sign Up.</p>
                        <p className='font-normal text-[20px] Welcome'>Welcome 👋,</p>
                        <p className='font-normal text-[20px] details'>Enter your details to register to the app.</p>
                    </div>

                    <div className="guest-login-btn mt-10">
                        <button className='guest-btn flex justify-center items-center'>Login as a guest user</button>
                    </div>

                    <div className='or-signup flex gap-[10px] mt-8'>
                        <div className='w-[150px] h-[1px] bg-gray-400 mt-[15px] ml-[4px]'></div>
                        <p>Or,Signup</p>
                        <div className='w-[150px] h-[1px] bg-gray-400 mt-[15px]'></div>
                    </div>

                    <form method='POST'>
                        <div className='form'>
                            <div className='flex flex-col mt-8 gap-2'>
                                <p>Full Name</p>
                                <input
                                    type="text"
                                    name='fullName'
                                    value={user.fullName}
                                    placeholder='eg.john doe'
                                    className='name-input w-[416px] h-[52px] p-4 outline-none'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p className='text-red-700'>  {formErrors.fullName && <div>{formErrors.fullName}</div>}</p>
                                {/* {formErrors.fullName && touched.fullName ? (
                                    <p className='text-red-700'>{formErrors.fullName}</p>
                                ) : null} */}
                            </div>

                            <div className='flex flex-col mt-4 gap-2'>
                                <p>Mobile Number</p>
                                <PhoneInput
                                    defaultCountry="IN"
                                    className='name-input w-[416px] h-[52px] p-4'
                                    name="mobileNo"
                                    value={user.mobileNo}
                                    onChange={(phone) => setPhone(phone)}
                                    onBlur={handleBlur}
                                    placeholder='eg.(808 555-0111)'
                                />
                            </div>

                            <div className='flex flex-col mt-4 gap-2'>
                                <p>Email ID(optional)</p>
                                <input
                                    type="text"
                                    name='email'
                                    value={user.email}
                                    placeholder='eg.debra.holt@example.com'
                                    className='name-input w-[416px] h-[52px] p-4 outline-none'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p className='text-red-700'>{formErrors.emailId && <div>{formErrors.emailId}</div>}</p>
                                {/* {formErrors.emailId && touched.emailId ? (
                                    <p className='text-red-700'>{formErrors.emailId}</p>
                                ) : null} */}
                            </div>

                            <div className='flex flex-col mt-4 gap-2'>
                                <p>Create Password</p>
                                <input
                                    type="password"
                                    name='password'
                                    value={user.password}
                                    placeholder='create password here'
                                    className='name-input w-[416px] h-[52px] p-4 outline-none'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p className='text-red-700'>{formErrors.password && <div>{formErrors.password}</div>}</p>
                                {/* <p className='text-red-700'>{formErrors.emailId && <div>{formErrors.emailId}</div>}</p> */}
                                {/* {formErrors.emailId && touched.emailId ? (
                                    <p className='text-red-700'>{formErrors.emailId}</p>
                                ) : null} */}
                            </div>

                            <div className='flex flex-col mt-4 gap-2'>
                                <p>Confirm Password here</p>
                                <input
                                    type="password"
                                    name='confirm_password'
                                    value={user.confirm_password}
                                    placeholder='confirm password here'
                                    className='name-input w-[416px] h-[52px] p-4 outline-none'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p className='text-red-700'>{formErrors.confirm_password && <div>{formErrors.confirm_password}</div>}</p>
                                {/* {formErrors.emailId && touched.emailId ? (
                                    <p className='text-red-700'>{formErrors.emailId}</p>
                                ) : null} */}
                            </div>

                            <div className="terms-cndtn flex mt-4 gap-2">
                                <input
                                    type="checkbox"
                                    name='accepted'
                                    className='mt-[3px]'
                                />
                                <p>I have accepted the <span className='Terms-and-Conditions'>Terms and Conditions</span></p>

                            </div>
                            {/* <p className='text-red-700'>{formErrors.accepted && <div>{formErrors.accepted}</div>}</p> */}
                            {/* {errors.accepted && touched.accepted ? (
                                <p className='text-red-700'>{errors.accepted}</p>
                            ) : null} */}

                            {/*  */}
                        </div>
                    </form>
                    <div className="signup-btn mt-10">
                        <button onClick={(e) => callBothFunctions(e)}
                            type='submit'
                            className='signup-button flex justify-center items-center font-bold'
                        >Sign Up</button>
                    </div>
                    <div id='recaptcha'></div>
                    <p>Already have an account? <span className='Already-have-an-account'>
                        <Link to={'/signin'}>Login</Link></span> </p>
                </div>

            </div>

        </div>
    )
}

export default SignUp