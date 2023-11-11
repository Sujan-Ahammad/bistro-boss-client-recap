import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle
        subTitle={"From 11:00am to 10:00pm"}
        title={"Order Online"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-14"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
          <h4 className="text-4xl uppercase text-center text-white font-thin relative -top-16">
            Salads
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
          <h4 className="text-4xl uppercase text-center text-white font-thin relative -top-16">
            Pizzas
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3" />
          <h4 className="text-4xl uppercase text-center text-white font-thin relative -top-16">
            Soups
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide4" />
          <h4 className="text-4xl uppercase text-center text-white font-thin relative -top-16">
            Dessarts
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
          <h4 className="text-4xl uppercase text-center text-white font-thin relative -top-16">
            Salads
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
