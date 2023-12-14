import React, { useContext, useEffect } from 'react'
import '../Styling/TopBar.css'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AppContext } from './AuthContext'
import { IoIosSearch } from "react-icons/io";
import LogOutBtn from './LogOutBtn'
import toast from 'react-hot-toast'

const TopBar = () => {

    const { successLoginCode, setSuccessLoginCode, setStoreOtp, checkOtp, storeOtp, setHideNav, setCheckSignupLogin,
        loginUser, setLoginUser } = useContext(AppContext)

    const handleSignUp = () => {
        setHideNav(true)
        setCheckSignupLogin(1)
    }

    const handleSignIn = () => {
        setHideNav(true)
        setCheckSignupLogin(2)
    }

    const logOutHandler = () => {
        setSuccessLoginCode(null)
        toast.success("Loggout Successfull...")
    }

    return (
        <div className='top-bar bg-cover h-[84px]  w-[100vw] p-5 mx-auto'>
            <div className='flex justify-around gap-[100px]'>

                {/*TopBar logo and quote*/}
                <div className='flex gap-3 w-[230px] h-[44px] top-bar-left '>
                    <div className='company-logo'>
                        <Link to={'/'}><img src='/images/Content.png' alt="" className='company-logo w-[44px] h-[44px]' /></Link>
                    </div>
                    <div className='flex flex-col company-text w-[186px]'>
                        <div><p className='text-[18px] font-extrabold text-white Vaidik-Gyan'>Vaidik Gyan & Store</p></div>
                        <div><p className='text-[10px] text-white Discover-Faith'>Discover Your Faith, Shop Divine</p></div>
                    </div>
                </div>

                {/*Input Search bar */}
                <div className='search-bar w-[507px]'>
                    <input
                        type="text"
                        placeholder='Search product name, temples, categories...'
                        className='absolute search-input w-[507px] rounded-[10px] h-[48px] p-6 font-normal text-[16px] hover:border-none'
                    />
                    <IoIosSearch className='relative top-[18px] left-[5px] text-gray-400' />
                </div>

                {/*signup,signIn and cart */}

                <div className='flex gap-2 w-[241px] mt-2 signup-details'>
                    {
                        successLoginCode == 200 ? (<div onClick={logOutHandler} className='ml-[-50px] mt-[-10px]'><LogOutBtn /> </div>) :
                            (<><div > <AiOutlineUser className='text-white font-medium text-[16px] mt-[6px]' /></div>
                                <Link to={'/signup'}><p className='text-white font-semibold text-[16px] signup-signin' onClick={handleSignUp}>SignUp/</p></Link></>)
                    }

                    {/* {
                        checkOtp == storeOtp ? (<p className='text-white font-semibold text-[16px] signup-signin'>Arman Ali</p>) : (<div className='flex'>
                            <Link to={'/signin'}><p className='text-white font-semibold text-[16px] signup-signin' onClick={handleSignIn}>SignIn</p></Link>
                        </div>)
                    } */}
                    {
                        successLoginCode == 200 ? (<p className='text-white font-semibold text-[16px] signup-signin'>Arman Ali</p>) :
                            (<div className='flex'>
                                <Link to={'/signin'}><p className='text-white font-semibold text-[16px] signup-signin' onClick={handleSignIn}>SignIn</p></Link>
                            </div>)
                    }
                    <div className='text-white font-semibold text-[16px]'>|</div>
                    <div className='text-white font-semibold text-[16px] mt-[6px]'><AiOutlineShoppingCart /></div>
                    <p className='text-white font-semibold text-[16px] ml-[-2px] cart'>Cart</p>
                </div>
            </div>
        </div >
    )
}

export default TopBar