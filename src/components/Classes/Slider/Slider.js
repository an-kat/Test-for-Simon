import React from "react";
import "./Slider.css"
import { Swiper, SwiperSlide } from "swiper/react";
import p1 from "../../../images/Vector (1).png"
import p2 from "../../../images/Vector (2).png"
import p3 from "../../../images/Vector (3).png"
import p4 from "../../../images/Vector (4).png"
import p5 from "../../../images/Vector (5).png"
import p6 from "../../../images/Vector (6).png"
import p7 from "../../../images/Vector (7).png"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);

const Slider = () => {
    return (
        <div>
            <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide>
                    <img src={p1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p3} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p4} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p5} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p6} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p7} alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;