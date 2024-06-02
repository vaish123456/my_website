import {useState} from "react";



const Services=()=>{

    useState([{
        id:"",
        title:"",
        description:"",
        actionButton:"",
        link:"",
    }])
    return <>
    <div className="main-container py-16">
        <h1 className ="text-5xl font-bold text-center underline">My Services</h1>
<div className="  services-container space-x-5 px-6 flex mt-10"> 
<div className=" hover:bg-gray-400 bg-slate-200 p-5 text-center shadow-lg rounded-xl service-1 space-y-4">
<i class="text-4xl fa-solid fa-code"></i>

<h1 className="text-3xl">Front-End Development</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsum aliquid quo odit, est saepe modi laudantium sint tenetur quos?
    </p>
    <button className="cursor-pointer px-3 py-2 bg-orange-600 rounded-full shadow-lg">Check here</button>
</div>
<div className=" hover:bg-gray-400 bg-slate-200 p-5 text-center shadow-lg rounded-xl service-2 space-y-4" >
<i class="text-4xl fa-solid fa-globe"></i>

<h1 className="text-3xl">Back-End Development</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsum aliquid quo odit, est saepe modi laudantium sint tenetur quos?
    </p>
    <button className=" cursor-pointer px-3 py-2 bg-orange-600 rounded-full shadow-lg">Check here</button>

</div>
<div className=" hover:bg-gray-400 bg-slate-200 p-5 text-center shadow-lg rounded-xl service-3 space-y-4">
<i class="text-4xl fa-solid fa-pen-to-square"></i>

<h1 className="text-3xl">Data Structure & Algorithms</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsum aliquid quo odit, est saepe modi laudantium sint tenetur quos?
    </p>
    <button className=" cursor-pointer px-3 py-2 bg-orange-600 rounded-full shadow-lg">Check here</button>
</div>
</div>
    </div>
    
    </>
}
export default Services; 