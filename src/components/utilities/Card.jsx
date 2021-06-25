import React from 'react'
import classes from '../../css/Card.module.css'

const Card = ({title,description,src,download}) => {
    return (
        <div className={classes.main__container}>
            <img src={src} alt="" className={classes.img__container}/>
            <div className={classes.content}>
                <h2 className={classes.title}>{title}</h2>
                <p>{description}</p>
            </div>
            <a href={download} download className={classes.download}>
                <button className={classes.download__button}>Download</button>
            </a>
        </div>
    )
}

export default Card
