import React from 'react'
import Styles from "./Work.module.css";
import image1 from "../Images/blog1.jpg";
import image2 from "../Images/covid1.jpeg";
import Nav from "../Nav/workNavbar";

const Work = () => {
    return (
        <>
            <Nav/>
            <div className={Styles.container}>
                <div className={Styles.info}> 
                    <h1>
                        <span>W</span>
                        <span>o</span>
                        <span>r</span>
                        <span>k</span>
                    </h1>
                    <div className={Styles.cards}>
                        <div className={Styles.box1}>
                            <div className={Styles.content}>
                                <div>
                                    <img src={image1} alt=""/>
                                    <div>
                                        <h2>01</h2>
                                        <h3>Project One</h3>
                                        <p>Blogging</p>
                                        <h4>HTML | CSS | JavaScript | PHP</h4>
                                        <a href="https://github.com/Anand123-shaw/Ungineering_social_media"><button class="btn"><i class="fa fa-github"></i>&nbsp;Source on github</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.box2}>
                            <div className={Styles.content}>
                                <div>
                                    <img src={image2} alt=""/>
                                    <div>
                                        <h2>02</h2>
                                        <h3>Project Two</h3>
                                        <p>COVID-19 status finder</p>
                                        <h4>React Js</h4>
                                        <a href="https://github.com/Anand123-shaw/COVID-19"><button class="btn"><i class="fa fa-github"></i>&nbsp;Source on github</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.wrap}>
                    <ul>
                        <li>
                            <span></span>
                            <h2>Blogging Application</h2>
                            <p>As a trainee of Ungineering.com, I developed a blogging web application.</p>
                            <h3>HTML | CSS | JavaScript | PHP</h3>
                            <div className={Styles.time}>
                                <span>June 2019</span>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <h2>COVID-19 status finder Application</h2>
                            <p>During lockdown, I developed a COVID-19 status finder web application where users can view the live updates of coronavirus cases.</p>
                            <h3>React Js</h3>
                            <div className={Styles.time}>
                                <span>April 2020</span>
                            </div>
                        </li>
                    </ul>
                </div>   
            </div>
        </>
    )
}
export default Work;
