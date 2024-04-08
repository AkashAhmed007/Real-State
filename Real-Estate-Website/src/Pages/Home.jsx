import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        Pagination={true}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <div className="slide1 slider">
            <h1 className="text-8xl font-extrabold text-black">Driven By Integrity</h1>
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
    </div>
  );
};

export default Home;
