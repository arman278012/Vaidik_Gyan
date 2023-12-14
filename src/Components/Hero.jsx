import React from 'react'
import '../Styling/Hero.css'
import { AiOutlineHeart } from 'react-icons/ai'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    };


    return (

        <div className='mt-5 order-first'>

            {/*First banner section */}

            <Slider className="relative left-[52px] slider-1" {...settings}>
                <div className="first-banner flex justify-center relative">

                    <img src='images/Rectangle 5.png' alt="" className='banner-1' />
                    <div className='absolute left-[-41px] top-[150px] right-slider'>
                        <img src='/images/circle.png' alt="" className='left-circle' />
                        <div className='absolute top-[30px] left-[34px] left-arrow'>
                            <img src='/images/Arrow - Right 3.png' alt="" />
                        </div>
                    </div>

                    <div className='absolute right-[76px] top-[150px] right-circle'>
                        <img src='/images/circle.png' alt="" />
                        <div className='absolute top-[30px] right-[38px] right-arrow'>
                            <img src='/images/Arrow - Right 3.png' alt="" />
                        </div>
                    </div>

                    <div className='absolute left-[105px] top-[100px] hero-top-para'>
                        <p className='font-normal text-[28px] leading-[36px] text-white uncover'>Uncover the Mystical Wonders of India</p>
                        <p className='font-semibold text-[44px] leading-[60px] text-white Experience '>Experience the Magic of</p>
                        <p className='font-semibold text-[44px] leading-[60px] text-white Experience '>Instant Shopping</p>
                    </div>

                    <div className='absolute right-[302px] top-[10px] banner-ramji-image'>
                        <img src='/images/banner-1-image.png' alt="" />
                    </div>

                    <div className='flex flex-col gap-[5px] absolute right-[334px] top-[50px] three-dots'>
                        <img src='/images/dots.png' alt="" />
                        <img src='/images/dots.png' alt="" />
                        <img src='/images/dots.png' alt="" />
                    </div>

                    <div className='absolute top-[0px] right-[20px] opacity-20'>
                        <img src='images/banner-light-image.png' alt="" />
                    </div>

                    <div className='absolute top-[-5px] right-[20px] opacity-20'>
                        <img src='images/banner-eclipse.png' alt="" />
                    </div>

                    <div className='flex flex-col gap-[5px] absolute left-[134px] bottom-[100px] three-dots'>
                        <img src='/images/dots.png' alt="" />
                        <img src='/images/dots.png' alt="" />
                        <img src='/images/dots.png' alt="" />
                    </div>

                    <div className='absolute bottom-[-40px] left-[140px] opacity-50'>
                        <img src='images/banner-bottom-eclipse.png' alt="" />
                    </div>
                </div>



                {/*second slider is here */}

                <div className="first-banner flex justify-center relative">
                    <img src='/images/Rectangle 5.png' alt="" className='banner-1' />
                    <div className='absolute left-[-41px] top-[150px] right-slider'>
                        <img src='/images/circle.png' alt="" className='left-circle' />
                        <div className='absolute top-[30px] left-[34px] left-arrow'>
                            <img src='/images/Arrow - Right 3.png' alt="" />
                        </div>
                    </div>
                    <div className='absolute right-[75px] top-[150px] right-circle'>
                        <img src='/images/circle.png' alt="" />
                        <div className='absolute top-[30px] right-[38px] right-arrow'>
                            <img src='/images/Arrow - Right 3.png' alt="" />
                        </div>
                    </div>

                    <div className='absolute left-[105px] top-[100px] hero-top-para'>
                        <p className='font-normal text-[28px] leading-[36px] text-white uncover'>Uncover the Mystical Wonders of India</p>
                        <p className='font-semibold text-[44px] leading-[60px] text-white Experience '>Experience the Magic of</p>
                        <p className='font-semibold text-[44px] leading-[60px] text-white Experience '>Instant Shopping</p>
                    </div>

                    <div className='absolute right-[302px] top-[10px] banner-ramji-image'>
                        <img src='/images/banner-1-image.png' alt="" />
                    </div>

                    <div className='flex flex-col gap-[5px] absolute right-[334px] top-[50px] three-dots'>
                        <img src='/images/dots.png' alt="" />
                        <img src='/images/dots.png' alt="" />
                        <img src='/images/dots.png' alt="" />
                    </div>

                    <div className='absolute top-[0px] right-[20px] opacity-20'>
                        <img src='images/banner-light-image.png' alt="" />
                    </div>

                    <div className='absolute top-[-5px] right-[20px] opacity-20'>
                        <img src='images/banner-eclipse.png' alt="" />
                    </div>

                    <div className='flex flex-col gap-[5px] absolute left-[134px] bottom-[100px] three-dots'>
                        <img src='/images/dots.png' alt="" />
                        <img src='/images/dots.png' alt="" />
                        <img src='/images/dots.png' alt="" />
                    </div>

                    <div className='absolute bottom-[-40px] left-[140px] opacity-50'>
                        <img src='images/banner-bottom-eclipse.png' alt="" />
                    </div>

                </div>
            </Slider>



            <div className='flex justify-center items-center mt-2 gap-2'>
                <div className='w-[16px] h-[8px] rounded-xl bg-gray-400'></div>
                <div className='w-[124px] h-[8px] rounded-xl long-row'></div>
                <div className='w-[16px] h-[8px] rounded-xl bg-gray-400'></div>
            </div>


            {/*Explore category section */}
            <div className='second-bannner w-[80vw] mx-auto mt-10 mb-10'>
                <div className='flex justify-between explore-category-para'>
                    <p className='font-semibold text-[28px] leading-[30px] Explore'>Explore Categories</p>
                    <p className='font-normal text-[20px] leading-[30px] text-right View-All'>View All</p>
                </div>

                <div className='flex gap-[50px] mt-10 temples-banner justify-center'>


                    <div className='Mathura'>
                        <div className='h-[140px] w-[140px] mt-2'>
                            <a href="/mathura"><img src='/images/mathura-vrindavan.png' alt="" className='' /></a>
                            <p className='font-medium text-center text-[16px] leading-[30px]'>Mathura Vrindavan</p>
                        </div>
                    </div>

                    <div className='Kashi'>
                        <div className='h-[140px] w-[140px] mt-2'>
                            <img src='/images/kash-vishwanath.png' alt="" />
                            <p className='font-medium text-center text-[16px] leading-[30px]'>Kashi Vishawanath</p>
                        </div>
                    </div>



                    <div className='Meenakshi'>
                        <div className='h-[140px] w-[140px] mt-2'>
                            <img src='/images/meenakshi.png' alt="" />
                            <p className='font-medium text-center text-[15  px] leading-[30px]'>Meenakshi Temple</p>
                        </div>
                    </div>

                    <div className='Somnath'>
                        <div className='h-[140px] w-[140px] mt-2'>
                            <img src='/images/somnath.png' alt="" />
                            <p className='font-medium text-center text-[16px] leading-[30px]'>Somnath Temple</p>
                        </div>
                    </div>



                    <div className='Vaishnodevi'>
                        <div className='h-[140px] w-[140px] mt-2'>
                            <img src='/images/vaishno-devi.png' alt="" />
                            <p className='font-medium text-center text-[16px] leading-[30px]'>Vaishnodevi</p>
                        </div>
                    </div>

                    <div className='w-[12vw] Siddhivinayak'>
                        <div className='h-[140px] w-[140px] mt-2'>
                            <img src='/images/shree-sidhi-vinayak.png' alt="" />
                            <p className='font-medium text-center text-[15px] leading-[30px]'>Shree Siddhivinayak</p>
                        </div>
                    </div>



                </div>
            </div>


            {/*Most selling products section is here */}

            <div className='most-selling-products w-[80vw] mx-auto mt-20 mb-10'>
                <div className='flex justify-between Most-Selling-Products-heading'>
                    <p className='font-semibold text-[28px] leading-[30px] para-1'>Most Selling Products</p>
                    <p className='font-normal text-[20px] leading-[30px] text-right para-2'>View All</p>
                </div>

                <div className='flex gap-10 mt-10 cards'>
                    <div className='relative'>
                        <img src='/images/radha-krishna.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>Fine Brass Radha Krishna Murt...</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src='/images/radha-banner.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>Pure Fine Brass Tara statue Sto....</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src='/images/ramayan.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>Original Shrimadbhagwat Gee...</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src='/images/mala.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>Rudraksha Mala Round Breads...</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>
                </div>
            </div>



            {/*Recomended section is here */}

            <div className='Recomended-for-you w-[80vw] mx-auto mt-20 mb-10'>
                <div className='flex justify-between Recomended-for-you-para'>
                    <p className='font-semibold text-[28px] leading-[30px] para-1'>Recomended for you</p>
                    <p className='font-normal text-[20px] leading-[30px] text-right para-2'>View All</p>
                </div>

                <div className='flex gap-10 mt-10 cards'>
                    <div className='relative'>
                        <img src='/images/peacock.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>Brass peacock Diya Hanging...</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src='/images/om ldki.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>Women Hare Krishna Kurta...</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src='images/mala2.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>Original Sandalwood(chandan) J...</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src='/images/agarbatti.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>Antique Loban Dingali</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*Red banner section is here */}





            <div className="red-banner flex justify-center relative">
                <img src='/images/red-banner.png' alt="" className='red-banner-image' />
                <div className='absolute left-[15px] top-[150px] right-slider'>
                    <img src='/images/circle.png' alt="" className='left-circle' />
                    <div className='absolute top-[30px] left-[34px] left-arrow'>
                        <img src='/images/Arrow - Right 3.png' alt="" />
                    </div>
                </div>
                <div className='absolute top-0'>
                    <img src='/images/red-lining-frame.png' alt="" />
                </div>
                <div className='absolute right-[15px] top-[150px] right-circle'>
                    <img src='/images/circle.png' alt="" />
                    <div className='absolute top-[30px] right-[38px] right-arrow'>
                        <img src='/images/Arrow - Right 3.png' alt="" />
                    </div>
                </div>

                <div className='absolute left-[210px] top-[100px] red-para'>
                    <p className='font-semibold text-[44px] leading-[40px] text-white para-1'>Immerse in Culture, Shop</p>
                    <p className='font-semibold text-[44px] leading-[40px] text-white para-2'>with Grace -All in One Place</p>
                    <p className='font-semibold text-[24px] leading-[20px] text-white mt-5 para-3'>Explore the beauty of culture and shop for</p>
                    <p className='font-semibold text-[24px] text-white para-4'>genuine items with our user friendly app.</p>
                </div>

                <div className='absolute right-[210px] top-[10px] order-10 red-banner-radha-krishna'>
                    <img src='/images/red-banner-radha-krishna.png' alt="" className='red-banner-radha-krishna-image' />
                </div>

                <div className='absolute top-[0px] right-[20px] opacity-20'>
                    <img src='images/banner-light-image.png' alt="" />
                </div>

                <div className='absolute top-[-5px] right-[20px] opacity-20'>
                    <img src='images/banner-eclipse.png' alt="" />
                </div>

                <div className='red-btn flex justify-center items-center gap-[5px] absolute left-[210px] bottom-[100px]'>
                    <button className='btn h-[40px] font-semibold w-[120px] bg-white rounded-xl text-orange-500'>Buy Product</button>
                </div>

                <div className='absolute bottom-[-40px] left-[140px] opacity-50'>
                    <img src='images/banner-bottom-eclipse.png' alt="" />
                </div>

            </div>


            {/* /*Second slider is here */}
            {/* <div className="red-banner flex justify-center relative">
                    <img src={red_banner} alt="" className='red-banner-image' />
                    <div className='absolute left-[88px] top-[150px] right-slider'>
                        <img src={circle} alt="" className='left-circle' />
                        <div className='absolute top-[30px] left-[34px] left-arrow'>
                            <img src={right_arrow} alt="" />
                        </div>
                    </div>
                    <div className='absolute top-0'>
                        <img src={lining} alt="" />
                    </div>
                    <div className='absolute right-[88px] top-[150px] right-circle'>
                        <img src={circle} alt="" />
                        <div className='absolute top-[30px] right-[38px] right-arrow'>
                            <img src={right_arrow} alt="" />
                        </div>
                    </div>

                    <div className='absolute left-[210px] top-[100px] red-para'>
                        <p className='font-semibold text-[44px] leading-[40px] text-white para-1'>Immerse in Culture, Shop</p>
                        <p className='font-semibold text-[44px] leading-[40px] text-white para-2'>with Grace -All in One Place</p>
                        <p className='font-semibold text-[24px] leading-[20px] text-white mt-5 para-3'>Explore the beauty of culture and shop for</p>
                        <p className='font-semibold text-[24px] text-white para-4'>genuine items with our user friendly app.</p>
                    </div>

                    <div className='absolute right-[210px] top-[10px] order-10 red-banner-radha-krishna'>
                        <img src={red_bannner_red_krishna} alt="" className='red-banner-radha-krishna-image' />
                    </div>

                    <div className='absolute top-[0px] right-[20px] opacity-20'>
                        <img src={banner_light_image} alt="" />
                    </div>

                    <div className='absolute top-[-5px] right-[20px] opacity-20'>
                        <img src={bannner_1_eclipse} alt="" />
                    </div>

                    <div className='red-btn flex justify-center items-center gap-[5px] absolute left-[210px] bottom-[100px]'>
                        <button className='btn h-[40px] font-semibold w-[120px] bg-white rounded-xl text-orange-500'>Buy Product</button>
                    </div>

                    <div className='absolute bottom-[-40px] left-[140px] opacity-50'>
                        <img src={banner_bottom_eclipse} alt="" />
                    </div>

                </div> */}

            <div className='flex justify-center items-center mt-2 gap-2'>
                <div className='w-[16px] h-[8px] rounded-xl bg-gray-400'></div>
                <div className='w-[124px] h-[8px] rounded-xl long-row'></div>
                <div className='w-[16px] h-[8px] rounded-xl bg-gray-400'></div>
            </div>


            {/*Popular products section is here */}
            <div className='most-selling-products w-[80vw] mx-auto mt-20 mb-10'>
                <div className='flex justify-between most-selling-products-para'>
                    <p className='font-semibold text-[28px] leading-[30px] para-1'>Popular Products</p>
                    <p className='font-normal text-[20px] leading-[30px] text-right para-2'>View All</p>
                </div>

                <div className='flex gap-10 mt-10 cards'>
                    <div className='relative'>
                        <img src='/images/ladduRakhneWala.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>Set of two Peacock Brass Oil Lam...</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src='/images/ramayan.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>Original Shri Ram Charitmana...</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src='/images/chandanKilakdi.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>White Sandalwood(chandan) Sti...</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src='/images/shankh.png' alt="" className='w-[290px] h-[276px]' />
                        <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <AiOutlineHeart className='text-red-700 text-[20px]' />
                        </div>
                        <p className='font-semibold text-[17px]'>White Vishnu Garudu Shankh...</p>
                        <div className='flex gap-4'>
                            <p className='font-medium text-[17px]'>$100.00</p>
                            <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                        </div>
                    </div>
                </div>
            </div>







        </div >
    )
}

export default Hero