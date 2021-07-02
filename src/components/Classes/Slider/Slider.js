import React from "react";
import "./Slider.css"
import p1 from "../../../images/Vector (1).png"
import p2 from "../../../images/Vector (2).png"
import p3 from "../../../images/Vector (3).png"
import p4 from "../../../images/Vector (4).png"
import p5 from "../../../images/Vector (5).png"
import p6 from "../../../images/Vector (6).png"
import p7 from "../../../images/Vector (7).png"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Navigation
} from 'swiper/core';
import p12 from "../../../images/Vector (12).png";
SwiperCore.use([Navigation]);

const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} slidesPerView={5} spaceBetween={-80} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide>
                    <div className={"post"}>
                        <img src={p1} alt="picture5"/>
                        <h3>How to Write an Animated Scene</h3>
                        <p>by Chris Amick</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"post"}>
                        <img src={p2} alt="picture5"/>
                        <h3>Animated Music Video Class</h3>
                        <p>by Rad Sechrist + J.I.D.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"post"}>
                        <img src={p3} alt="picture5"/>
                        <h3>Animated Music Video Class</h3>
                        <p>by Dab Bowie + Rad Sechrist + Daniel Rojas</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"post"}>
                        <img src={p4} alt="picture5"/>
                        <h3>How to Write an Animated Scene</h3>
                        <p>by Chris Amick</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"post"}>
                        <img src={p5} alt="picture5"/>
                        <h3>Write Night: Writing Workshop + Q&A</h3>
                        <p>by Chris Amick</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"post"}>
                        <img src={p6} alt="picture5"/>
                        <h3>Writing Your Animated Pilot</h3>
                        <p>by Bill Wolkoff</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"post"}>
                        <img src={p7} alt="picture5"/>
                        <h3>Write Night: Writing Workshop + Q&A</h3>
                        <p>by Chris Amick</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;