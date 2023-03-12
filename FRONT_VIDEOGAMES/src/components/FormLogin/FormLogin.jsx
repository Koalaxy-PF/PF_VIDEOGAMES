import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useForm} from 'react-hook-form';
import logo from '../../assets/icons/koalaLogo.png';
import koala from '../../assets/login/koala_login.jpg'
import { Login, Login_OK} from '../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'



export default function LoginForm(){

    const {register, formState:{errors}, handleSubmit}= useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(Login(data)).then((response) => {
            dispatch(Login_OK(response.data)).then(() => {
                Swal.fire({
                    title: '¡Bienvenido!',
                    text: 'Usuario validado correctamente',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Continuar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/home");
                      console.log(response)
                      info
                    }})})
            }).catch((err) => {
                Swal.fire({
                  tittle: '¡Ops! Hay un problema',
                  text: err.response.data.message,
                  icon: "error",
                  confirmButtonText: "Continuar"
                })
              })
    }
        

    return(
        <div class='min-height-full flex bg-gray-200 justify-center'>
            <div class='hidden lg:block relative h-full'>
                <img class='w-[750px] object-cover' src={koala} alt="" />
            </div>
            <div class='flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 mx-auto xl:px-24'>
                <div class='mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem] justify-center'>
                    <div class='text-center lg:text-left justify-center'>
                        <img class='h-12 w-auto m-auto  justify-center' src={logo} alt="" />
                        <h2 class='mt-6 text-3xl font-extrabold text-gray-900 text-center'>Login with your account</h2>
                        <p class='mt-2 text-sm text-gray-600 text-center'>
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