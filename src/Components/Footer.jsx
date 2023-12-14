import React from 'react'
import '../Styling/Footer.css'
import '../Styling/TopBar.css'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiFillYoutube } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (

        <div>
            <div className='footer flex p-12 justify-around w-[100vw] mx-auto relative'>

                <div className='footer-img'>
                    <img src='/images/footer-ellipse-real.png' alt="" className='absolute top-[-250px] right-0 opacity-40' />
                </div>

                {/*Footer column-1 detials */}
                <div className='compnay-details w-[20vw]'>
                    <div className='flex gap-3'>
                        <div className='w-[44px]'>
                            <img src='/images/Content.png' alt="" className='' />
                        </div>
                        <div className='flex flex-col'>
                            <div><p className='text-[18px] font-extrabold text-white'>Vaidik Gyan and Store</p></div>
                            <div><p className='text-[10px] text-white'>Discover Your Faith, Shop Divine</p></div>
                        </div>
                    </div>

                    <div>
                        <p className='text-white text-[14px] font-normal mt-4 leading-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quis iusto, sint nulla
                            quod fuga consectetur, voluptate provident nesciunt aperiam ipsum blanditiis magnam dolore
                            illo ullam reprehenderit cumque veniam voluptatem.</p>
                    </div>

                    <div className='flex gap-5 mt-3'>
                        <div className='border-[1px] border-white rounded-full h-[40px] w-[40px] flex justify-center items-center'>
                            <BiLogoFacebook className='text-[22px] text-white'></BiLogoFacebook>
                        </div>

                        <div className='border-[1px] border-white rounded-full h-[40px] w-[40px] flex justify-center items-center'>
                            <BsInstagram className='text-[22px] text-white'></BsInstagram>
                        </div>

                        <div className='border-[1px] border-white rounded-full h-[40px] w-[40px] flex justify-center items-center'>
                            <AiFillYoutube className='text-[22px] text-white    '></AiFillYoutube>
                        </div>
                    </div>
                </div>

                {/*Footer column-1 detials */}
                <div className='nav-details-1 flex flex-col w-[25vw] text-white'>
                    <p className='font-semibold text-[20px] '>Lorem lorem</p>
                    <ul className='font-normal text-[16px] leading-[30px]'>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>Report Abuse</li>
                        <li>Submit a Dispute</li>
                        <li>Policies and Rules</li>
                        <li>Get Paid for your feedback</li>
                        <li>Enquiry</li>
                    </ul>
                </div>

                {/*Footer column-1 detials */}
                <div className="nav-details-2 w-[25vw] text-white">
                    <p className='font-semibold text-[20px]'>Lorem lorem</p>
                    <ul className='font-normal text-[16px] leading-[30px]'>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>Report Abuse</li>
                        <li>Submit a Dispute</li>
                        <li>Policies and Rules</li>
                        <li>Get Paid for your feedback</li>
                        <li>Enquiry</li>
                    </ul>
                </div>
            </div>
            <div className='text-center mb-5 mt-5 Copyright'>
                <p className='font-semibold'>Developed By Apponward Technology | Copyright @2023</p>
            </div>
        </div>
    )
}

export default Footer