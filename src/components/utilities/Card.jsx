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
            <div className={classes.info}>
                <button className={classes.info__button}>More info</button>
            </div>
        </div>
    )
}

export default Card
