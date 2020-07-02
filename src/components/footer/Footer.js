import React from 'react'
// eslint-disable-next-line
import styles from './futter.module.css'
import CurrentGoal from '../pages/tasks-page/current-goal/CurrentGoal';
import ProgressBar from './../pages/tasks-page/progress-bar/ProgressBar';

const Footer = () => {
    return (
        <>
        <div className={styles.foncolor}>
            <div className={styles.progressCurrentMobile}>
            <CurrentGoal />
            <ProgressBar />
            </div>
        </div>
    

       <footer className={styles.footer}>Developed by BC18 'GoIt'  /  2020</footer> 
       </>
    );
}

export default Footer;