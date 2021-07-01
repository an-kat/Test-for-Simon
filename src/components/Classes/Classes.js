import React from 'react';
import "./Classes.css"
import logo from "../../images/classes-logo.png"
import p1 from "../../images/Vector (1).png"
import p2 from "../../images/Vector (2).png"
import p3 from "../../images/Vector (3).png"
import p4 from "../../images/Vector (4).png"
import p5 from "../../images/Vector (5).png"
import p6 from "../../images/Vector (6).png"


const Classes = () => {
    return (
        <>
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
                    <img src={p4} alt="picture1"/>
                    <h3>How to Write an Animated Scene</h3>
                    <p>by Chris Amick</p>
                </div>
                <div className={"post"}>
                    <img src={p5} alt="picture2"/>
                    <h3>Write Night: Writing Workshop + Q&A</h3>
                    <p>by Chris Amick</p>
                </div>
                <div className={"post"}>
                    <img src={p6} alt="picture3"/>
                    <h3>Writing Your Animated Pilot</h3>
                    <p>by Bill Wolkoff</p>
                </div>
            </div>
        </>
    );
};

export default Classes;