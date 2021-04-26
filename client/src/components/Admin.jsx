import React, { useEffect, useState } from 'react'
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import Admin_Panel from './Admin_Panel';

const Admin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [valid, setValid] = useState(false);
    const [error, setError] = useState('');
    const admin_email = process.env.REACT_APP_AdminEmail;
    const admin_password = process.env.REACT_APP_AdminPassword;

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        if(email === admin_email && password === admin_password){
            setValid(true);
        }
        else{
            setError('Invalid Email or Password')
        }
    }
    return (
        <>
        {
            valid ? (
                <Admin_Panel />
            ) : (
                <div className='login'>
                    <div className="login_container">
                    <h1>ADMIN LOGIN</h1>
                            <br/>
                            <form action='POST'>
                            <div className="inputFields">
                                <i className="far fa-envelope"></i>
                                <Input
                                    type="text"
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
                            <br/><br/>
                            <Button
                                color="lightBlue"
                                buttonType="outline"
                                size="regular"
                                rounded={false}
                                ripple="dark"
                                onClick= {handleAdminLogin}
                                >
                                ADMIN LOGIN
                            </Button>
                            <p className='errorMessage'>{error}</p>
                            </form>
                    </div> 
                </div>
            )
        }
        </>
    )
}

export default Admin
