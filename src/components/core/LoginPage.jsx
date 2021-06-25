import React,{useState} from 'react'
import Input from '../utilities/Input'
import Button from '../utilities/Button'
import { Link } from 'react-router-dom'
import classes from '../../css/Login.module.css'

const LoginPage = () => {

    const [userDetails,setUserDetails]=useState({
        userId:'',
        password:'',
        error:'',
        success:false
    })

    const {userId,password,error,success}=userDetails


    const validateEmail=(email)=>{
        let regEx = /\S+@\S+\.\S+/;
        return regEx.test(email);
    }
    const validatePassword=(password)=>{
        if( password.match(/[a-z]/g) &&
            password.match(/[A-Z]/g) &&
            password.match(/[0-9]/g) &&
            password.match(/[^a-zA-Z\d]/g) &&
            password.length>5){
                return true
        }
        return false
    }

    const handleInputChange=(name)=>(event)=>{
        setUserDetails({...userDetails, [name]:event.target.value})
    }

    const handleInputSubmit=(event)=>{
        event.preventDefault();

        if( userId===''||
            password===''){
            setUserDetails({...userDetails,error:'Enter all feilds'})
            return;
        }if(!validateEmail(userId)){
            setUserDetails({...userDetails,error:'Enter valid EmailId'})
            return;
        }if(!validatePassword(password) || password.length<=3){
            setUserDetails({...userDetails,error:'Password should be alphanumeric and of lenght >3'})
            return;
        }

        const authValue={user:userId}
        localStorage.setItem("user",JSON.stringify(authValue))
        setUserDetails({...userDetails,error:'',success:true})

    }

    return (
        <div className={classes.input__container}>
            <h1>Login</h1>
           
            {error!=='' ? <p className={classes.para}>{error}</p> :null}
            {success ? <p className={classes.success}>
                            Successfully <Link to="/Search" className={classes.success__link}>Click here</Link> 
                        </p>
                    : null}
           
            <form className={classes.input__form}>
                <Input type="text" 
                placeholder="Enter UserId(e-mail)" 
                onChange={handleInputChange("userId")}
                value={userId}
                required
                />

                <Input type="password" 
                placeholder="Enter password" 
                onChange={handleInputChange("password")}
                value={password}
                required
                />

                <Button type="submit" 
                onClick={handleInputSubmit}>
                    Submit
                </Button>
            </form>

        </div>
    )
}

export default LoginPage
