import React from 'react'
import Styles from "./skill.module.css";
import Nav from "../Nav/skillsNavbar"

const skill = () => {
    return (
        <>
            <Nav/>
            <div className={Styles.container}>
                <div className={Styles.info}>
                    <h1>
                        <span>S</span>
                        <span>k</span>
                        <span>i</span>
                        <span>l</span>
                        <span>l</span>
                        <span>s</span>
                    </h1>
                    <div className={Styles.card}>
                        <div>
                            <span>JavaScript</span>
                            <div tooltip1="Intermediate" className={Styles.bar}>
                                <div className={Styles.progress1}></div>
                            </div>
                        </div>
                        <div>
                            <span>React</span>
                            <div tooltip2="Intermediate" className={Styles.bar}>
                                <div className={Styles.progress2}></div>
                            </div>
                        </div>
                        <div>
                            <span>CSS</span>
                            <div tooltip3="Expert" className={Styles.bar}>
                                <div className={Styles.progress3}></div>
                            </div>
                        </div>
                        <div>
                            <span>HTML</span>
                            <div tooltip4="Intermediate" className={Styles.bar}>
                                <div className={Styles.progress4}></div>
                            </div>
                        </div>
                        <div>
                            <span>Java</span>
                            <div tooltip5="Intermediate" className={Styles.bar}>
                                <div className={Styles.progress5}></div>
                            </div>
                        </div>
                        <div>
                            <span>Bootstrap</span>
                            <div tooltip6="Beginner" className={Styles.bar}>
                                <div className={Styles.progress6}></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={Styles.wrap}>
                    <div className={Styles.cube}>
                        <div className={Styles.front}>JavaScript</div>
                        <div className={Styles.back}>Bootstrap</div>
                        <div className={Styles.left}>Java</div>
                        <div className={Styles.right}>HTML</div>
                        <div className={Styles.top}>CSS</div>
                        <div className={Styles.buttom}>React</div>
                    </div>
                </div> 
                
            </div>
        </>
    )
}
export default skill;
