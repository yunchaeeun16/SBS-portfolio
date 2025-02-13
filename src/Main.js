import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/Main.css";

function Main() {
  return (
    <div className="wrap">
      <div className="main">
        <div className="img-wrap">
          <>
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              cssMode={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 4800,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link to="/shop-new">
                  <img
                    src="https://bloomingtale.co.kr/web/season2_skin/skin15/images/0223_violet.png"
                    alt="메인 이미지 purple"
                    className="img img-1"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop-best">
                  <img
                    src="https://bloomingtale.co.kr/web/season2_skin/skin15/images/0223_forest.png"
                    alt="메인 이미지 green"
                    className="img img-2"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/bye-2024">
                  <img
                    src="https://bloomingtale.co.kr/web/season2_skin/skin15/images/christmas_1122.jpg"
                    alt="메인 이미지 christmas"
                    className="img img-3"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop-collab">
                  <img
                    src="https://bloomingtale.co.kr/web/season2_skin/skin15/images/0223_rock.png"
                    alt="메인 이미지 rocknroll"
                    className="img img-4"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop-calendar">
                  <img
                    src="https://bloomingtale.co.kr/web/season2_skin/skin15/images/0223_moon.png"
                    alt="메인 이미지 moon"
                    className="img img-5"
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
}

export default Main;
