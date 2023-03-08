import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/icons/koalaLogo.png';
import {useForm} from 'react-hook-form'


export default function LoginForm() {

    const {register, formState:{errors}, handleSubmit}= useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" {...register('email', {
                        required: true,
                        minLength: 3,
                        pattern:  /\S+@\S+\.\S+/
                    })} />
                    {errors.email?.type === 'required' && <p>Please enter an email</p>}
                    {errors.email?.type === 'minLength' && <p>The email must have at least 3 characters</p>}
                    {errors.email?.type === 'pattern' && <p>Please enter a correct email format </p>}
                </div>

                <div>
                    <label htmlFor="">Password</label>
                    <input type="password"{...register('password' , {
                        required: true,
                        minLength: 6
                    })} />
                    {errors.password?.type === 'minLength' && <p>The password must have at least 3 characters</p>}
                    {errors.email?.type === 'required' && <p>Please enter a password</p>}
                </div>

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}