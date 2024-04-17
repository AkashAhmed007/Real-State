import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="my-5">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <div className="slide1 slider">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-5">
              Driven By Integrity
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2 slider">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-5">World-class client support</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide3 slider">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-5">A fully customized experience</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide4 slider">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-5">Modernize your property</h1>
          </div>
        </SwiperSlide>
      </Swiper> 
    </div>
  );
};

export default Banner;
