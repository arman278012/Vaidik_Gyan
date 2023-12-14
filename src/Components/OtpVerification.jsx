import React, { useContext, useRef, useState } from 'react'
import '../Styling/OtpVerification.css'
import { AppContext } from './AuthContext'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../Firebase/SetUp'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'



const OtpVerification = () => {

    const [otp, setOtp] = useState("")


    
    const { user, setShowSuccessModal, setHideNav, checkSignupLogin, setCheckSignupLogin, setStoreOtp, phone, user1, setCheckOtp,
        verifyOtp, setVerifyOtp, storeOtp } = useContext(AppContext)

    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];


    //The code is written again for the input verification...
    const handleChange = (e, index) => {
        // let value = e.target.value;
        const value = e.target.value;

        if (!isNaN(value) && value !== '') {
            setVerifyOtp((prevOtp) => {
                const newOtp = [...prevOtp];
                newOtp[index] = value;
                return newOtp;
            })
        }

        // Focus on the next input box if available
        if (index < 5 && value !== '') {
            inputRefs[index + 1].current.focus();
        }
    };
    console.log(verifyOtp)

    const handleKeyDown = (e, index) => {
        console.log("handle key down function is working...");

        // Handle backspace to focus on the previous input box
        if (e.key === 'Backspace') {
            if (index > 0) {
                setVerifyOtp((prevOtp) => {
                    const newDownOtp = [...prevOtp];
                    newDownOtp[index] = ''; // Set the current index to an empty string
                    return newDownOtp;
                });
                inputRefs[index - 1].current.focus();
            } else if (index === 0) {
                // Handle case when the first input box is focused and Backspace is pressed
                setVerifyOtp((prevOtp) => {
                    const newDownOtp = [...prevOtp];
                    newDownOtp[index] = ''; // Set the current index to an empty string
                    return newDownOtp;
                });
                // You can choose to focus on the previous input or perform a different action
            }
        }
    }

    const otpHandler = (e) => {
        setOtp(e.target.value)

    }

    const bothHandleFunction = (e, idx) => {
        e.preventDefault();
        handleChange(e, idx);
        otpHandler(e);
    }

    const navigate = useNavigate();


    const VerifyLoginOtp = async () => {
        var str = verifyOtp.join('')
        setOtp(str)
        setStoreOtp(str)

        try {
            const otpData = await user1.confirm(str)
            console.log(otpData)
            setCheckOtp(str)
            console.log("real otp entered 0n 102:", str)
            toast.success("Login Successfull...")
            setHideNav(false)
            navigate('/')
        }
        catch (err) {
            console.log("It also enters in catch block")
            console.log(err)
            toast.error("Please enter the valid Otp!!")
        }
    }


    const VerifySignUpOtp = async () => {
        var str = verifyOtp.join('')
        setOtp(str)
        setStoreOtp(str)

        try {
            const otpData = await user1.confirm(str)
            setCheckOtp(str)
            // console.log("real otp entered 0n 102:", str)
            setShowSuccessModal(true)
            toast.success("signup Successfull...")
            setHideNav(false)
           
           
            navigate('/')
        }
        catch (err) {
           
            toast.error("Please enter the valid Otp!!")
        }
    }


    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            console.log("conformation is pritnintng", confirmation)
        }
        catch (err) {
            console.log(err)
        }
        navigate('/otp')
    }



    return (
        <div className='otp-verification mb-10 mt-10'>
            <div className='flex gap-10 otp-content'>
                <div className='left w-[40vw] h-auto relative  '>

                    {/*Logo image is here */}
                    <div className="logo  top-[42%] absolute right-[42%]">
                        <img src='/images/Content(1).png' alt="" className='h-[120px] w-[120px]' />
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

                <div className="right mt-20">
                    <div className="top-para bg-white mt-10">
                        <p className='font-semibold text-[36px] para1'>Verify Mobile Number</p>
                        <p className='font-normal text-[20px] para2'>Please wait till we verify your number (907) 555-0101 &</p>
                        <p className='font-normal text-[20px] para3'> auto generate an OTP for you.</p>
                    </div>

                    <div className='flex gap-0 mt-10 ml-[-30px] main-otp-container'>
                        {/* <div className='h-[56px] w-[56px] box-1 flex justify-center items-center ml-20'>
                            <input
                                onChange={(e) => setOtp(e.target.value)}
                                type="text" placeholder='enter otp' /> <br />
                        </div> */}

                        {
                            verifyOtp.map((digit, index) => (
                                <input
                                    className='otp-container h-[56px] w-[56px] box-1 flex justify-center items-center ml-[30px] text-[20px]
                                    p-[10px]'
                                    key={index}
                                    ref={inputRefs[index]}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => bothHandleFunction(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                />
                            ))
                        }
                    </div>

                    <div className="auto-verify mt-3">
                        <p className='text-[16px] font-normal'>Auto verifying code in 3 minutes. <span className='time-verify'>02:10</span></p>
                    </div>

                    {
                        checkSignupLogin == 2 ? (<div className="verify-btn mt-10">
                            <button onClick={VerifyLoginOtp} className='btn flex justify-center items-center font-bold'>Submit & Verify</button>
                        </div>) : (<></>)
                    }

                    {
                        checkSignupLogin == 1 ? (<div className="verify-btn mt-10">
                            <button onClick={VerifySignUpOtp} className='btn flex justify-center items-center font-bold'>Submit & Verify signup</button>
                        </div>) : (<></>)
                    }

                    <div className='didnt-rcv-otp'>
                        <button onClick={sendOtp}> <p className='ml-[90px]'>Didn't recieve the OTP? <span className='resend'>Resend</span> </p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpVerification