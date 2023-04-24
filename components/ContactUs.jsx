'use client'


import React, {useState, useRef} from 'react'
import { HiUser, HiMail, HiPhone, HiHome} from "react-icons/hi";
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';
import {Formik, Form, Field, ErrorMessage} from 'formik'
//import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const [forma, setForma] = useState(false)

    /*const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mct92bg', 'template_g83fm4l', form.current, 'm2xOxQ-aK0DVQJM59')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };*/
    

  return (
    <div className='antialiased md bg-gradient-to-r bg-gray-800 '>
        <div className='flex w-full min-h-screen max-h-screen justify-center items-center'>
            <div className='flex flex-col md:space-x-6 md:space-y-0 space-y-6 max-h-screen bg-slate-700 w-full max-w-[1240px] overflow-hidden md:h-[600px] p-8 rounded-xl shadow-lg text-white'>
                <div className=' relative flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 justify-between md:grid md:my-auto  md:grid-cols-5'>
                        

                    <div className='flex flex-col space-y-6 justify-between mt-12 md:mt-0 w-80 md:col-span-2 '>
                        <div className='flex flex-col justify-center text-center '>
                            <h1 className='font-bold text-3xl md:text-4xl tracking-wide '>Contact Us</h1>
                            <p className='pt-2 text-slate-100  text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit autem, error totam numquam architecto at.</p>
                        </div>

                        <div className='inline-flex space-x-2 items-center '>
                            <HiPhone className='text-slate-300 text-xl md:text-2xl'></HiPhone>
                            <span className='pl-[4px] mt-[-2px] md:text-lg'>+(123) 456 789</span>
                        </div>

                        <div className='inline-flex space-x-2 items-center '>
                            <HiMail className='text-slate-300 text-xl md:text-2xl'></HiMail>
                            <span className='pl-[4px] mt-[-2px] md:text-lg'>ooficial@gmail.com</span>
                        </div>

                        <div className='inline-flex space-x-2 items-center '>
                            <HiHome className='text-slate-300 text-xl md:text-2xl'></HiHome>
                            <span className='pl-[4px] mt-[-2px] md:text-lg'>Delaware, USA</span>
                        </div>

                        <div className='flex flex-row justify-around md:justify-normal pt-4'>
                            <a href=""><FaFacebookSquare className='text-2xl md:text-3xl md:mx-3 text-black'/></a>
                            <a href=""><FaGithubSquare className='text-2xl md:text-3xl md:mx-3 text-black'/></a>
                            <a href=""><FaInstagram className='text-2xl md:text-3xl md:mx-3 text-black'/></a>
                            <a href=""><FaTwitterSquare className='text-2xl md:text-3xl md:mx-3 text-black'/></a>
                        </div>
                    </div>

                    <div className='w-0 h-0 absolute md:w-40 md:h-40 bg-slate-400 rounded-full z-0 -right-12 -top-20'></div>
                    <div className='absolute w-40 h-40 bg-slate-400 rounded-full z-0 left-[280px] top-[320px]'></div>

                    <div className='z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:col-span-3'>
                        <Formik 
                            initialValues={{
                                nombre: '',
                                correo: '',
                                message: ''
                            }}
                            validate={(valores) => {
                                let errores = {};
                            
                            if(!valores.nombre){
                                errores.nombre = 'Por favor ingrese un nombre'
                                }else if(!/^[a-z ,.'-]+$/i.test(valores.nombre)){
                                    errores.nombre = 'El nombre solo puede contener letras y espacios'
                                }
                            
                            if(!valores.correo){
                                errores.correo = 'Por favor ingresa un correo electronico'
                            }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(valores.correo)){
                                errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones, signos y mayusculas'
                            }

                            return errores                                                            
                            }}
                            onSubmit={(valores, {resetForm}) =>{
                                resetForm();
                                setForma(true);
                                setTimeout(() => setForma(false), 5000);
                            }}
                            >

                            {({errors}) => (
                                <Form action="" className='flex flex-col space-y-4' ref={Form} >
                                    <div>
                                        <label htmlFor="nombre" className='text-sm'>Your name</label>
                                    <Field type="text" id='nombre' name='nombre' placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300'/>
                                    <ErrorMessage name='nombre'  component={() => (<div className='error text-red-500'>{errors.nombre}</div>)}></ErrorMessage>
                                    </div>

                                    <div>
                                    <label htmlFor="correo" className='text-sm'>Your name</label>
                                    <Field type="text" id='correo' name='correo' placeholder='mail@mail.com' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300'/>
                                    <ErrorMessage name='correo' component={() => (<div className='error text-red-500'>{errors.correo}</div>)}></ErrorMessage>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className='text-sm'>Message</label>
                                    <Field component='textarea' type="text" placeholder='Message' id='message' name='message' rows='4' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-300'/>
                                    </div>
                                    <button type='submit' className='inline-block self-end hover:scale-105 hover:transition hover:ease-in hover:duration-300 bg-violet-900 hover:bg-violet-950 tracking-wider text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
                                    {forma && <div className='text-xl relative text-black text-center bg-green-200 p-2 border border-solid border-black shadow-xl rounded-xl'>Formulario enviado con exito!</div>}
                                </Form>

                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
