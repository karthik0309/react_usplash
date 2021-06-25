import React,{useState} from 'react'
import NavItem from './NavItem'
import classes from '../../css/NavBar.module.css'

const NavBar = () => {
    const [showSideBar,setShowSideBar]  = useState(false);
    const [navClass,setNavClass]=useState([classes.nav__items]);

    const handleClick=()=>{
        if(showSideBar===false){
            setNavClass([...navClass ,classes.active])
        }else if(showSideBar===true){
            setNavClass([classes.nav__items])
        }
        setShowSideBar(!showSideBar)
    }

    return (
        <div className={classes.navbar}>
            <h2 className={classes.title}>PngSearch</h2>
            <div className={navClass.join(" ")}>
                <NavItem to="/" name="Home" onClick={handleClick}/>
                <NavItem to="/Search" name="Search" onClick={handleClick}/>
                <NavItem to="/AboutUs" name="About us" onClick={handleClick}/>
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
