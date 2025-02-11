import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Main() {
  return (
    <div className="wrap">
      <div className="main">
        <div className="img-wrap">
          <>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link to="/shop-new" className="img img-1">
                  <img
                    src="https://bloomingtale.co.kr/web/season2_skin/skin15/images/0223_violet.png"
                    alt="메인 이미지 purple"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop-best" className="img img-2">
                  <img
                    src="https://bloomingtale.co.kr/web/season2_skin/skin15/images/0223_forest.png"
                    alt="메인 이미지 green"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/bye-2024" className="img img-3">
                  <img
                    src="https://bloomingtale.co.kr/web/season2_skin/skin15/images/christmas_1122.jpg"
                    alt="메인 이미지 christmas"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop-collab" className="img img-4">
                  <img
                    src="https://bloomingtale.co.kr/web/season2_skin/skin15/images/0223_rock.png"
                    alt="메인 이미지 rocknroll"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/shop-calendar" className="img img-5">
                  <img
                    src="https://bloomingtale.co.kr/web/season2_skin/skin15/images/0223_moon.png"
                    alt="메인 이미지 moon"
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
