import React from 'react'
import Styles from "./About.module.css";
import Nav from '../Nav/aboutNavBar';

const About = () => {
    return (
        <>
            <Nav/>
            <div className={Styles.container}>
                <div className={Styles.info}>
                    <h1>
                        <span>A</span>
                        <span>B</span>
                        <span>O</span>
                        <span>U</span>
                        <span>T</span>
                        <span>&nbsp;</span>
                        <span>M</span>
                        <span>E</span>
                    </h1>
                    <div className={Styles.card}>
                        <p>B-TECH final year student of Computer Science from Heritage Institute Of Technology.</p>
                        <br/>
                        <p>Well-organised person, problem solver, quick learner, high attention to detail.</p>
                        <br/>
                        <p>Fan of graphics related games, indoor activities, TV series and recently cooking.</p>
                        <br/>
                        <p>Interested in the entire frontend spectrum and working on ambitious projects with positive person.</p>
                    </div>
                </div>
                <div className={Styles.wrap}>
                    <div className={Styles.circle}>
                        <div>Software Engineer</div>
                        <div>Coder</div>
                        <div>Well-Organised</div>
                        <div>Problem Solver</div>
                        <div>Quick Learner</div>
                        <div>Attentive</div>
                        <div>Animation Lover</div>
                        <div>Gaming Lover</div>
                        <div>Love to Cook</div>
                        <div>Frontend Developer</div>
                    </div>
                </div>   
            </div>
        </>
    )
}
export default About;
