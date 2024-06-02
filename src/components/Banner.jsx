import React, { useRef, useEffect } from 'react';
import bannerImage from '../assets/pn_2.png';
import bannerBackground from "../assets/bn_5.png";
import Typed from 'typed.js';

const Banner=()=>{
    const el=useRef(null);

useEffect(()=>{
const typed=new Typed(el.current,{
strings:["Front-End Developer","Back-End Developer","DSA-Enthusiast"],
startDelay:300,
typeSpeed:100,
backSpeed:100,
backDelay:100,
loop:true,
});
//Destroying
return()=>{
    typed.destroy();
};

},[]);





    return (
       <div 
       style={
        {
            backgroundImage:`url(${bannerBackground})`,
            backgroundSize:"cover",
        }}
       className="main-container flex h-4/5 items-center">
        <div className=" flex justify-center items-center  text-white">{/*text */}
        <div className="w-2/3 space-y-2 ms-10">
        <h3 className="mt-20 text-3xl font-semibold">Hey! There</h3>
        <h1 className="text-5xl font-bold">Myself Vaishnavi.</h1>
        <h2 className=" text-3xl font-semibold"> And,I am  <span ref={el}></span></h2>
        
        <p className="">My name is Vaishnavi, and I have a strong command of front-end development, back-end development, and data structures and algorithms. I am currently a B.Tech third-year student at KIET Group of Institutions. I actively work on various projects, applying my skills to create full-stack applications. Participation in coding competitions and hackathons helps me refine my abilities. Managing academics with project work is crucial, and I strive to excel in both. I am focused on gaining practical experience through internships, which are vital for my career.</p>
        <div className="icons-container flex space-x-8">
        <a className="hover:bg-orange-600 cursor-pointer px-3 py-3 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"><i class="fa-brands text-3xl text-white fa-facebook"></i></a>
        <a className="hover:bg-orange-600 cursor-pointer px-3 py-3 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"><i class="fa-brands text-3xl  text-white fa-instagram"></i></a>
        <a className="hover:bg-orange-600 cursor-pointer px-3 py-3 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"><i class="fa-brands text-3xl  text-white fa-github"></i></a>
        <a className="hover:bg-orange-600 cursor-pointer px-3 py-3 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"><i class="fa-brands text-3xl  text-white fa-linkedin"></i></a>
        <a className="hover:bg-orange-600 cursor-pointer px-3 py-3 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"><i class="fa-brands text-3xl  text-white fa-twitter"></i></a>
        </div>
        
        
        <br/>
        
        <a className="text-black px-2 py-2 bg-pink-700 rounded-full shadow-lg transform-translate-y-20" href="/contact">Contact Me</a>


        </div>
        </div>
<div className="ml-50 w-full flex justify-center size-80">{/* image */}
<img className="rounded-full shadow-lg my-8 w-fit"src={bannerImage}/>

</div>

        </div>
    )
};
    export default Banner