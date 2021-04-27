import React, { useState , useEffect} from 'react'
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import { useStateValue } from '../StateProviser'
import { provider, auth } from '../firebase'
import google from '../img/google.png'

const Login_SignUp = () => {
    const [{user}, dispatch] = useStateValue();
    const [hasAccount, setHasAccount] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const handleGlogin = () => {
        auth.signInWithPopup(provider).then((result) => {
                dispatch({
                    type : 'SET_USER',
                    user : result.user
                })
            }).catch((e) => {
                console.log(e.message);
            })  
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        const res = await fetch('https://mern-app221.herokuapp.com/login', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email,
                password
            })
        })

        if(res.status === 401){
            setError('Invalid Credentials or (empty field) ❌')
        }
        else {
            dispatch({
                type : 'SET_USER',
                user : true
            })
        }
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        const res = await fetch(' https://mern-app221.herokuapp.com/signup', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify ({
                email, password
            })
            
        })
        if(res.status === 401){
            setError('Email already in use or (empty field)')
        }
        else {
            dispatch({
                type : 'SET_USER',
                user : true
            })
        }
    }
    return (
        <div className='login'>
           <div className="login_container">
           <h1>LOGIN</h1>
                <br/>
                <form action='POST'>
                <div className="inputFields">
                    <i className="far fa-envelope"></i>
                    <Input
                        type="email"
                        color="lightBlue"
                        size="regular"
                        outline={true}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> 
                </div>
                <br /><br />
                <div className="inputFields">
                    <i className="fas fa-lock"></i>
                    <Input
                        type="password"
                        color="lightBlue"
                        size="regular"
                        outline={true}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /> 
                </div>
                 <div className='btnContainer'>
                    { hasAccount ? ( 
                        <>
                        <Button
                            color="lightBlue"
                            buttonType="outline"
                            size="regular"
                            rounded={false}
                            ripple="dark"
                            onClick={handleLogin}
                            type='submit'
                            >
                            Log in
                        </Button>
                        <p>Don't have an account ?<span onClick ={() => {
                            setHasAccount(!hasAccount)
                            setError('');
                        }
                        }> 
                            Sign in
                            </span></p>
                        </>
                    ) : (
                        <>
                        <Button
                            color="lightBlue"
                            buttonType="outline"
                            size="regular"
                            rounded={false}
                            ripple="dark"
                            onClick= {handleSignup}
                            >
                            Sign up
                        </Button>
                        <p>Have an account ? <span onClick ={() => setHasAccount(!hasAccount)}>Log in</span></p>
                        </>
                    )}
                </div>
                <div className="login_footer">
                    <p className='errorMessage'><small><b>{error}</b></small></p>
                    <img onClick={handleGlogin} className='googleImg' src={google} alt="Google"/>
                </div>
                </form>
           </div> 
        </div>
    )
}

export default Login_SignUp
