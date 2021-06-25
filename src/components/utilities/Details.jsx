import React from 'react'
import classes from '../../css/About.module.css'

const Details = () => {
    return (
        <div className={classes.main__container}>
            <h1 className={classes.header}>About Us</h1>
            <p className={classes.para}>PngSearch is an application where you can search and download all the images at one place.You can download and search thousand of images for free.</p>
            <p className={classes.para}>This application is build using React js and unsplash api the no. of requests per hour are restricted(50 image searches per hour)</p>
            <p className={classes.para}>Axios is used to fetch the data</p>
        </div>
    )
}

export default Details
