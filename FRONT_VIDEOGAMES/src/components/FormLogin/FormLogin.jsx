import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from 'react-hook-form';
import logo from '../../assets/icons/koalaLogo.png';
import koala from '../../assets/login/koala_login.jpg'
import { Login } from '../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'


export default function LoginForm(){

    const {register, formState:{errors}, handleSubmit}= useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(Login(data)).then((response) => {
            
        })
    }

    return(
        <div class='min-height-full flex'>
            <div class='hidden lg:block relative h-full flex-1'>
                <img class='h-[650px] object-cover' src={koala} alt="" />
            </div>
            <div class='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
                <div class='mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
                    <div class='text-center lg:text-left'>
                        <img class='h-12 w-auto m-auto lg:m-0' src={logo} alt="" />
                        <h2 class='mt-6 text-3xl font-extrabold text-gray-900'>Login with your account</h2>
                        <p class='mt-2 text-sm text-gray-600'>
                            No tienes cuenta ?
                            <Link to='/CreateUser' class='font-medium text-sky-600 hover:text-sky-200 pl-[5px]'>Regístrate ahora</Link>
                        </p>
                    </div>

                    <div class='mt-6'>
                        <form onSubmit={handleSubmit(onSubmit)} class='space-y-1'>
                            <div class='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
                                <div>
                                    <label class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Email</label>
                                    <input type="text" class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Email' {...register('email',{
                                        required: true,
                                        minLength: 3,
                                        pattern: /\S+@\S+\.\S+/
                                    })} />
                                    {errors.email?.type === 'required' && <p class='mt-[10px] text-center'>Please enter an email</p>}
                                    {errors.email?.type === 'minLength' && <p class='mt-[10px] text-center'>The email must have at least 3 characters</p>}
                                    {errors.email?.type === 'pattern' && <p class='mt-[10px] text-center'>Please enter a correct email format </p>}
                                </div>
                                <div>
                                <label for="password" class='block text-sm font-medium text-gray-600 mt-2 lg:mt-0'>Password</label>
                                    <input type="password" class='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Password' {...register('password', {
                                        required: true,
                                        minLength: 6
                                    })} />
                                    {errors.password?.type === 'minLength' && <p class='mt-[10px] text-center'>The password must have at least 3 characters</p>}
                                    {errors.password?.type === 'required' && <p class='mt-[10px] text-center'>Please enter a password</p>}
                                </div>
                            </div>
                            <div>
                                <button class='mt-4 w-full py-3 bg-gray-900 text-white' type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}