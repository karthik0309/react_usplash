import React from 'react'
import classes from '../../css/Input.module.css'

const Input = ({...rest}) => {
    return (
        <input 
        className={classes.text__input} 
        {...rest}/>
    )
}

export default Input
