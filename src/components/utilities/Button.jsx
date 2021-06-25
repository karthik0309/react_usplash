import React from 'react'
import classes from '../../css/Button.module.css'

const Button = ({children,...rest}) => {
    return (
            <button className={classes.input__button} {...rest}>
                {children}
            </button>
    )
}

export default Button
