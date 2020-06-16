import React from "react";
import Styles from "./navBar.module.css";
import Controller from "./skillsNavController.module.css";
const Nav=()=>{
    return(
        <div className={Styles.header}>
                <div className={Styles.logo}>
                    <a href="/">
                        <h3>A</h3>
                    </a>
                </div>    
                <div className={Controller.navController}>
                    <ul>
                        <li>
                            <li>
                                <i class="fa fa-home"></i>
                                <li>
                                    <a href="/">home</a> 
                                </li>    
                            </li>
                        </li>
                        <li>
                            <li>
                                <i class="fa fa-user"></i>
                                <li>
                                    <a href="/about">About</a> 
                                </li>    
                            </li>
                        </li>
                        <li>
                            <li>
                                <i class="fa fa-code"></i>
                                <li>
                                    <a href="/skills">skills</a>
                                </li>
                            </li>
                        </li>
                        <li>
                            <li>
                                <i class="fa fa-eye"></i>
                                <li>
                                    <a href="/work">work</a>
                                </li>
                            </li>
                        </li>
                        <li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                <li>
                                    <a href="/contact">contact</a>
                                </li>
                            </li>
                        </li>
                    </ul>
                </div>
        </div>
    );
}
export default Nav;