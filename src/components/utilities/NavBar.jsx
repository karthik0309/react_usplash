import React,{useState} from 'react'
import NavItem from './NavItem'
import classes from '../../css/NavBar.module.css'

const NavBar = () => {
    const [showSideBar,setShowSideBar]  = useState(false);

    let navClass=[]
    navClass.push(classes.nav__items)
    const handleClick=()=>{
        if(showSideBar===false){
            navClass.push(classes.active)
        }else if(showSideBar===true){
            navClass=[classes.nav__items]
        }
        console.log(showSideBar)
        setShowSideBar(!showSideBar)
    }
    console.log(navClass)
    return (
        <div className={classes.navbar}>
            <h2 className={classes.title}>PngSearch</h2>
            <div className={navClass.join(" ")}>
                <NavItem to="/" name="Home"/>
                <NavItem to="/Search" name="Search"/>
                <NavItem to="/AboutUs" name="About us"/>
            </div>
            <div className={classes.hamburger} onClick={handleClick}>
                <div className={classes.h1}></div>
                <div className={classes.h2}></div>
                <div className={classes.h3}></div>
            </div>
        </div>
    )
}

export default NavBar
