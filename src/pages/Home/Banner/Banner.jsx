
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow'
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'

function Banner() {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                slidesPerView={'auto'}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '',
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                    clickable: true
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-full h-[600px] rounded-md"
            >
                <SwiperSlide className="relative">
                    <img src={banner1} alt="place" />
                    <div className='h-full w-full bg-gradient-to-br from-black to-transparent absolute top-0 left-0'></div>
                    <div className="w-1/3 text-white absolute top-1/4 left-16 space-y-4 z-10">
                        <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] border-[#FF3811] mr-4">Discover More</button>
                            <button className="btn  border-white">Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={banner2} alt="place" />
                    <div className='h-full w-full bg-gradient-to-br from-black to-transparent absolute top-0 left-0'></div>
                    <div className="w-1/3 text-white absolute top-1/4 left-16 space-y-4 z-10">
                        <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] border-[#FF3811] mr-4">Discover More</button>
                            <button className="btn  border-white">Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={banner3} alt="place" />
                    <div className='h-full w-full bg-gradient-to-br from-black to-transparent absolute top-0 left-0'></div>
                    <div className="w-1/3 text-white absolute top-1/4 left-16 space-y-4 z-10">
                        <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] border-[#FF3811] mr-4">Discover More</button>
                            <button className="btn  border-white">Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={banner4} alt="place" />
                    <div className='h-full w-full bg-gradient-to-br from-black to-transparent absolute top-0 left-0'></div>
                    <div className="w-1/3 text-white absolute top-1/4 left-16 space-y-4 z-10">
                        <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] border-[#FF3811] mr-4">Discover More</button>
                            <button className="btn  border-white">Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={banner5} alt="place" />
                    <div className='h-full w-full bg-gradient-to-br from-black to-transparent absolute top-0 left-0'></div>
                    <div className="w-1/3 text-white absolute top-1/4 left-16 space-y-4 z-10">
                        <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] border-[#FF3811] mr-4">Discover More</button>
                            <button className="btn  border-white">Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={banner6} alt="place" />
                    <div className='h-full w-full bg-gradient-to-br from-black to-transparent absolute top-0 left-0'></div>
                    <div className="w-1/3 text-white absolute top-1/4 left-16 space-y-4 z-10">
                        <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-[#FF3811] border-[#FF3811] mr-4">Discover More</button>
                            <button className="btn  border-white">Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                
                <div className="absolute bottom-[12%] right-[10%] z-10">
                    <button className="bg-[#FF3811] border border-white text-2xl rounded-full p-2 text-white prev"><FaAngleLeft></FaAngleLeft></button>
                    <button className="bg-[#FF3811] border border-white text-2xl ml-4 rounded-full p-2 text-white next"><FaAngleRight></FaAngleRight></button>
                </div>
            </Swiper>
        </div>
    )
}

export default Banner
