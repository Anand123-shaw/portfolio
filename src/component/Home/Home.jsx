import React from "react";
import Styles from "./Home.module.css";
import Nav from "../Nav/homeNavBar";
const Home =()=>{
    return (
        <>
            <Nav/>
            <div className={Styles.home}>
                <div className={Styles.info}>
                    <h3>
                        <span>H</span>
                        <span>i</span>
                        <span>,</span>
                    </h3>
                    <h3>
                        <span>I</span>
                        <span>'</span>
                        <span>m</span>
                        <span>&nbsp;</span>
                        <span>A</span>
                        <span>n</span>
                        <span>a</span>
                        <span>n</span>
                        <span>d</span>
                        <span>,</span>
                    </h3>
                    <h3>
                        <span>W</span>
                        <span>e</span>
                        <span>b</span>
                        <span>&nbsp;</span>
                        <span>D</span>
                        <span>e</span>
                        <span>s</span>
                        <span>i</span>
                        <span>g</span>
                        <span>n</span>
                        <span>e</span>
                        <span>r</span>
                    </h3>
                    <span>JavaScript&nbsp;|&nbsp;React&nbsp;|&nbsp;CSS</span>
                    <div className={Styles.button}>
                        <a href="/contact"><button class="btn">Contact Me</button></a>
                    </div>
                </div>
                <div className={Styles.wraps}>
                    <div className={Styles.wrapper}>
                        <h2 className={Styles.sentence}>
                            <span>I would</span>
                            <span>like to improve</span>
                            <span>my</span>
                            <div className={Styles.words}>
                                <span>skills</span>
                                <span>knowledge</span>
                                <span>concepts</span>
                                <span>ability</span>
                                <span>self</span>
                            </div>
                            <span>everyday.</span>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;