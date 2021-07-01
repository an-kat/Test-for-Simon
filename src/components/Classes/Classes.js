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
import p15 from "../../images/Vector (15).png"
import p16 from "../../images/Vector (16).png"
import p17 from "../../images/Vector (17).png"


const Classes = () => {
    return (
        <>
            <img className={"fire-1"} src={p15} alt=""/>
            <img className={"fire-2"} src={p16} alt=""/>
            <img className={"fire-3"} src={p17} alt=""/>
            {/*present*/}
            <div className={"present"}>
                <p className={"present-logo"}><img src={logo} alt="Logo"/></p>
                <p>
                    Improve the parts you s#ck at with <b>LIVE Classes</b> + <br/>Reviews and get help creating your personal <b>Project</b>
                </p>
            </div>
            {/*posts*/}
            <p className={"coming"}>coming soon</p>
            <div className={"coming-posts"}>
                <div className={"post"}>
                    <img src={p1} alt="picture1"/>
                    <h3>Energetic Character Design</h3>
                    <p>by Chase Conley</p>
                </div>
                <div className={"post"}>
                    <img src={p2} alt="picture2"/>
                    <h3>Movie Concepting</h3>
                    <p>by Rad Sechrist + J.I.D.</p>
                </div>
                <div className={"post"}>
                    <img src={p3} alt="picture3"/>
                    <h3>Animated Music Video Class</h3>
                    <p>by Dab Bowie + Rad Sechrist + Daniel Rojas</p>
                </div>
            </div>
            <p className={"writing"}>writing</p>
            <div className={"writing-posts"}>
                <div className={"post"}>
                    <img src={p4} alt="picture4"/>
                    <h3>How to Write an Animated Scene</h3>
                    <p>by Chris Amick</p>
                </div>
                <div className={"post"}>
                    <img src={p5} alt="picture5"/>
                    <h3>Write Night: Writing Workshop + Q&A</h3>
                    <p>by Chris Amick</p>
                </div>
                <div className={"post"}>
                    <img src={p6} alt="picture6"/>
                    <h3>Writing Your Animated Pilot</h3>
                    <p>by Bill Wolkoff</p>
                </div>
            </div>
            <p className={"storyboarding"}>storyboarding</p>
            <div className={"storyboarding-posts"}>
                <div className={"post"}>
                    <img src={p7} alt="picture7"/>
                    <h3>Storyboarding for Animation Workshop</h3>
                    <p>by Andy Cung</p>
                </div>
                <div className={"post"}>
                    <img src={p8} alt="picture8"/>
                    <h3>Gesture Drawing for Storyboarding</h3>
                    <p>by Chris Amick</p>
                </div>
                <div className={"post"}>
                    <img src={p9} alt="picture9"/>
                    <h3>Storyboarding for Animation</h3>
                    <p>by Dab Bowie + Rad Sechrist + Daniel Rojas</p>
                </div>
                <div className={"post"}>
                    <img src={p10} alt="picture10"/>
                    <h3>Animated Music Video Class</h3>
                    <p>by Dab Bowie + Rad Sechrist + Daniel Rojas</p>
                </div>
            </div>
            <p className={"visual"}>visual development</p>
            <div className={"visual-posts"}>
                <div className={"post"}>
                    <img src={p11} alt="picture11"/>
                    <h3>How to Write an Animated Scene</h3>
                    <p>by Chris Amick</p>
                </div>
                <div className={"post"}>
                    <img src={p12} alt="picture12"/>
                    <h3>Write Night: Writing Workshop + Q&A</h3>
                    <p>by Chris Amick</p>
                </div>
            </div>
            <p className={"animation"}>animation</p>
            <div className={"animation-posts"}>
                <div className={"post"}>
                    <img src={p13} alt="picture13"/>
                    <h3>2D Animation Workshop</h3>
                    <p>by Toniko Pantoja</p>
                </div>
                <div className={"post"}>
                    <img src={p14} alt="picture14"/>
                    <h3>Write Night: Writing Workshop + Q&A</h3>
                    <p>by Chris Amick</p>
                </div>
            </div>
            <p className={"missed-out"}>missed out</p>
        </>
    );
};

export default Classes;