import bannerImage from '../assets/about_3.png';


import {useState} from "react";
const About=()=>{
   const useState=[({

    })]
    return (<>
<div className="main-container bg-gray-100 py-16">
    <h1 className="text-center pb-16 text-5xl underline font-bold">About Me</h1>
    <div className="flex items-center">
        <div className="w-full flex justify-center ">
            {/*image container*/}
            <img className="w-fit rounded-full"
            src={bannerImage}alt="vaishnavi singh"/>
        </div>

        <div className="w-full flex justify-center">{/*text-container*/}
       <div className="space-y-6  w-2/3"> 
<h1 className="text-4xl font-semibold">DSA Enthusiast and Backend Developer</h1>
<p>
Backend development using Node.js and data structures and algorithms (DSA) is essential for creating efficient and scalable applications. Node.js, a powerful JavaScript runtime, enables server-side scripting and asynchronous processing. Mastery of DSA allows for optimal data management and algorithm implementation
</p>
<p>Data structures and algorithms (DSA) are fundamental for efficient programming. Mastery of DSA enables developers to solve complex problems, optimize code, and manage data effectively. Algorithms dictate the logic and flow of operations, while data structures organize and store data efficiently.</p>
  <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg cursor-pointer">Read More..</button>
  </div>
  
        </div>
    </div>

</div>

    </>)
}
export default About;