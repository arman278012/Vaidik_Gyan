import React, { useContext, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import '../Styling/RegistrationModal.css';
import { AppContext } from './AuthContext';

const RegistrationModal = () => {

    const { setShowSuccessModal } = useContext(AppContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSuccessModal(false);
        }, 2000)
        return () => clearTimeout(timer)
    }, [])


    return (
        <div className='reg-modal fixed top-[100px] left-[500px] z-10 bg-white p-5 rounded-xl'>
            <div className='w-[444px] h-[444px] relative rounded-sm success-popup'>
                <div className="dot-1 absolute  top-[50px] left-[40px]">
                    <img src="/images/regDot1.png" alt="" />
                </div>
                <div className="dot-2 absolute  top-[100px] left-[100px]">
                    <img src="/images/regDot2.png" alt="" />
                </div>
                <div className="dot-3 absolute  top-[50px] right-[150px]">
                    <img src="/images/regDot3.png" alt="" />
                </div>
                <div className="dot-4 absolute  top-[100px] right-[70px]">
                    <img src="/images/regDot4.png" alt="" />
                </div>
                <div className="dot-5 absolute  top-[150px] left-[40px]">
                    <img src="/images/regDot5.png" alt="" />
                </div>
                <div className="dot-6 absolute  top-[180px] left-[100px]">
                    <img src="/images/regDot6.png" alt="" />
                </div>
                <div className="dot-7 absolute  top-[158px] right-[150px]">
                    <img src="/images/regDot7.png" alt="" />
                </div>
                <div className="dot-8">
                    <img src="/images/regDot8.png" alt="" />
                </div>

                <div className='absolute top-[75px] left-[158px] check-circle h-[112px] w-[112px] rounded-full flex justify-center items-center'>
                    <FaCheck className='text-[40px] text-white check' />
                </div>

                <div className="text text-center mt-[180px] para-success">
                    <p className='text-[28px] font-semiboldbold Registration-Successful'>Registration Successful!!</p>
                    <p className='successfully-registered'>You have successfully registered to the app. You can now explore the app</p>
                </div>
            </div>
        </div>
    )
}

export default RegistrationModal