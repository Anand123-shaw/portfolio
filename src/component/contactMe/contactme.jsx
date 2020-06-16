import React from 'react'
import Styles from "./contactme.module.css";
import Nav from "../Nav/contactNavbar";

 const me = () => {
    return (
        <>
        <Nav/>
        <section>
            <div className={Styles.container}>
                <div className={Styles.contactInfo}>
                    <div>
                        <h2>Contact Info</h2>
                        <ul className={Styles.info}>
                            <li>
                                <span><i class="fa fa-home"></i></span>
                                <span>51/37, P.K.Biswas Road, Khardah 24 PGS(N), Kolkata - 700117</span>
                            </li>
                            <li>
                                <span><i class="fa fa-envelope"></i></span>
                                <span>shaw.anand369@gmail.com</span>
                            </li>
                            <li>
                                <span><i class="fa fa-phone"></i></span>
                                <span>7003093990</span>
                            </li>
                        </ul>
                    </div>
                    <ul className={Styles.sci}>
                        <li>
                            <a href="https://www.facebook.com/anand.shaw.1000"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/anand-shaw-46baba193"><i class="fa fa-linkedin"></i></a>                            </li>
                        <li>
                            <a href="https://github.com/Anand123-shaw"><i class="fa fa-github"></i></a>
                        </li>
                    </ul>
                </div>
                <div className={Styles.contactForm}>
                    <h2>Send a message</h2>
                    <form method="POST" data-netlify="true">
                        <div className={Styles.formBox}>
                            <div className={Styles.inputBox}>
                                <input type="text" name="Fname" required/>
                                <span>First Name</span>
                            </div>
                            <div className={Styles.inputBox}>
                                <input type="text" name="Lname" required/>
                                <span>Last Name</span>
                            </div>
                            <div className={Styles.inputBox}>
                                <input type="email" name="Email" required/>
                                <span>Email</span><br/>
                                <small>Please enter a valid email</small>
                            </div>
                            <div className={Styles.inputBox}>
                                <input type="text" name="Mnumber" required/>
                                <span>Mobile Number</span><br/>
                                <small>I'll never share your number with anyone else</small>
                            </div>
                            <div className={Styles.inputBox}>
                                <textarea name="Message" required/>
                                <span>Write a message...</span>
                            </div>
                            <div className={Styles.inputBox}>
                                <input type="submit" name="Submit" value="send"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}
export default me;
