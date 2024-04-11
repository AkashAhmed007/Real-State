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
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black">
              Driven By Integrity
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2 slider">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black">World-class client support</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide3 slider">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black">A fully customized experience</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide4 slider">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black">Modernize your property</h1>
          </div>
        </SwiperSlide>
      </Swiper> 
    </div>
  );
};

export default Banner;
