import React from 'react';
import "./Classes.css"
import logo from "../../images/classes-logo.png"
import p1 from "../../images/Vector (1).png"
import p2 from "../../images/Vector (2).png"
import p3 from "../../images/Vector (3).png"
import p4 from "../../images/Vector (4).png"
import p5 from "../../images/Vector (5).png"
import p6 from "../../images/Vector (6).png"
import p7 from "../../images/Vector (7).png"
import p8 from "../../images/Vector (8).png"
import p9 from "../../images/Vector (9).png"
import p10 from "../../images/Vector (10).png"
import p11 from "../../images/Vector (11).png"
import p12 from "../../images/Vector (12).png"
import p13 from "../../images/Vector (13).png"
import p14 from "../../images/Vector (14).png"
import fire from "../../images/sticker_random_fire.png"
import sticker from "../../images/sticker_random_make art.png"
import Slider from "./Slider/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation
} from 'swiper/core';
SwiperCore.use([Navigation]);



const Classes = () => {
    return (
        <>
            {/*present*/}
            <div className={"present"}>
                <p className={"present-logo"}><img src={logo} alt="Logo"/></p>
                <p>
                    Improve the parts you s#ck at with <span>LIVE Classes</span> + <br/>Reviews and get help creating your personal <span>Project</span>
                </p>
            </div>
            {/*posts*/}
            <span className={"coming"}>coming soon</span>
            <div className={"coming-posts"}>
                <img src={fire} alt="" className={"fire"}/>
                <Swiper slidesPerView={5} spaceBetween={-80} pagination={{
                    "clickable": false
                }} className="mySwiper">
                    <SwiperSlide>
                        <div className={"post"}>
                            <img src={p1} alt=""/>
                            <h3>How to Write an Animated Scene</h3>
                            <p>by Chris Amick</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"post"}>
                            <img src={p2} alt="picture2"/>
                            <h3>Movie Concepting</h3>
                            <p>by Rad Sechrist + J.I.D.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"post"}>
                            <img src={p3} alt="picture3"/>
                            <h3>Animated Music Video Class</h3>
                            <p>by Dab Bowie + Rad Sechrist + Daniel Rojas</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <p className={"storyboarding"}>storyboarding</p>
            <div className={"storyboarding-posts"}>
                <Swiper slidesPerView={5} spaceBetween={-80} pagination={{
                    "clickable": false
                }} className="mySwiper">
                    <SwiperSlide>
                        <div className={"post"}>
                            <img src={p7} alt="picture4"/>
                            <h3>Storyboarding for Animation Workshop</h3>
                            <p>by Andy Cung</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"post"}>
                            <img src={p8} alt="picture5"/>
                            <h3>Gesture Drawing for Storyboarding</h3>
                            <p>by Chris Amick</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"post"}>
                            <img src={p9} alt="picture6"/>
                            <h3>Storyboarding for Animation</h3>
                            <p>by Chris Copeland + Justin Copeland</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"post"}>
                            <img src={p10} alt="picture6"/>
                            <h3>Drawing for Storyboards in Animation</h3>
                            <p>by Chris Copeland</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <p className={"visual"}>visual development</p>
            <div className={"visual-posts"}>
                <Swiper slidesPerView={5} spaceBetween={-80} pagination={{
                    "clickable": false
                }} className="mySwiper">
                    <SwiperSlide>
                        <div className={"post"}>
                            <img src={p11} alt="picture4"/>
                            <h3>Environment Painting and Composition</h3>
                            <p>by Kalen Chock</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"post"}>
                            <img src={p12} alt="picture5"/>
                            <h3>Seeing colors!</h3>
                            <p>by Chris Amick</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <p className={"animation"}>animation</p>
            <div className={"animation-posts"}>
                <img src={sticker} alt="" className={"sticker"}/>
                <Swiper slidesPerView={5} spaceBetween={-80} pagination={{
                    "clickable": false
                }} className="mySwiper">
                    <SwiperSlide>
                        <div className={"post"}>
                            <img src={p13} alt="picture13"/>
                            <h3>2D Animation Workshop</h3>
                            <p>by Toniko Pantoja</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"post"}>
                            <img src={p12} alt="picture5"/>
                            <h3>Animation Industry Fundamentals</h3>
                            <p>by Ethan Becker</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <p className={"missed-out"}>missed out</p>
            <Slider />
        </>
    );
};

export default Classes;