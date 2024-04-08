import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <div className="slide1 slider">
            <h1 className="text-8xl font-extrabold text-black">
              Driven By Integrity
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2 slider">
            <h1>Slide2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide3 slider">
            <h1>Slide3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide4 slider">
            <h1>Slide4</h1>
          </div>
        </SwiperSlide>
      </Swiper>
      
      <div>
        <h2 className="border border-t-[rgb(0,51,86)] border-b-[rgb(0,51,86)] m-5 text-2xl font-extrabold px-5 py-5 w-40">About Company</h2>
        <p className="text-4xl m-3 px-2 py-5 text-[rgb(0,51,86)] w-3/4">A comprehensive suite of services designed to seamlessly integrate with your commercial real estate platform.</p>
      </div>
      
    </div>
  );
};

export default Banner;
