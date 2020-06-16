import React from 'react'
import Styles from "./loader.module.css";
const loader = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.loading}>
                <span>loading...</span>
            </div>
        </div>
    )
}
export default loader;
