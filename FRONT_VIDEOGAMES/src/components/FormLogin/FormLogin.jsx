import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/icons/koalaLogo.png';
import {useForm} from 'react-hook-form';
import koala from '../../assets/login/koala_login.jpg'


export default function LoginForm() {

    const {register, formState:{errors}, handleSubmit}= useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div class='flex '>
           <div>
            <img class='w-[750px]' src={koala} alt="" />
           </div>

           <div class='justify-center text-center m-auto'>
           <form class='border border-t-[1px] border-gray-400 p-[80px] rounded' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1 class='text-[30px] mb-[50px]'>Login</h1>
                    <input class='mb-[20px] border border-t-[1px] border-gray-500 rounded' type="text" placeholder='Email' {...register('email', {
                        required: true,
                        minLength: 3,
                        pattern:  /\S+@\S+\.\S+/
                    })} />
                    {errors.email?.type === 'required' && <p class='mb-[10px]'>Please enter an email</p>}
                    {errors.email?.type === 'minLength' && <p class='mb-[10px]'>The email must have at least 3 characters</p>}
                    {errors.email?.type === 'pattern' && <p class='mb-[10px]'>Please enter a correct email format </p>}
                </div>

                <div>
                    <input class='mb-[20px] border border-t-[1px] border-gray-500 rounded' type="password" placeholder='Password'{...register('password' , {
                        required: true,
                        minLength: 6
                    })} />
                    {errors.password?.type === 'minLength' && <p>The password must have at least 3 characters</p>}
                    {errors.email?.type === 'required' && <p>Please enter a password</p>}
                </div>

                <button class ='mt-[30px] bg-slate-900 broder border-t-[1px] border-white py-[5px] px-[10px] rounded text-white' type='submit'>Login</button>
            </form>
           </div>
        </div>
    )
}