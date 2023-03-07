import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/icons/koalaLogo.png';

const validateForm = (input) => {
    const error = {};
    if(!input.email.length) error.email = <h3>Please enter an email</h3>
    if(!input.password.length) error.password = <h3>Please enter your password</h3>

    return error;
};

export default function LoginForm() {
    const dispatch = useDispatch();
    
    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({});

    function handleInputChange (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setError(validateForm({
            ...input,
            [e.target.name]: e.target.value
        }))
    };

    function handleSubmit (e) {
        e.preventDefault();
        if(!input.email || !input.password){
            return alert ('Please complete all the fields to login')
        }

    };

    return(
        <div>
            <img src={logo} alt="" />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                <label>Email</label>
                <input onChange={(e) => handleInputChange(e)} key= 'email' type="text" name='email' value={input.email} />
                </div>

                <div>
                    {error.email && <span>{error.email}</span>}
                </div>

                <div>
                    <label >Password</label>
                    <input onChange={(e) => handleInputChange(e)} key='password' type="password" name='password' value={input.password} />
                </div>

                <div>
                    {error.password && <span>{error.password}</span>}
                </div>

                <div>
                    <button>Login</button>
                </div>




            </form>
        </div>
    )
}