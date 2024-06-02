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
    Front-end development focuses on creating the visual and interactive aspects of websites. It involves using HTML for structure, CSS for styling, and JavaScript for interactivity. Front-end developers ensure that websites are user-friendly, responsive, and visually appealing. 
    </p>
    <button className="cursor-pointer px-3 py-2 bg-orange-600 rounded-full shadow-lg">Check here</button>
</div>
<div className=" hover:bg-gray-400 bg-slate-200 p-5 text-center shadow-lg rounded-xl service-2 space-y-4" >
<i class="text-4xl fa-solid fa-globe"></i>

<h1 className="text-3xl">Back-End Development</h1>
    <p>
    Backend development focuses on server-side logic, databases, and APIs. It involves using languages like Node.js, Python, or Java for creating robust and scalable applications. Backend developers ensure efficient data processing, user authentication, and server communication. They work with databases like MySQL, MongoDB
    </p>
    <button className=" cursor-pointer px-3 py-2 bg-orange-600 rounded-full shadow-lg">Check here</button>

</div>
<div className=" hover:bg-gray-400 bg-slate-200 p-5 text-center shadow-lg rounded-xl service-3 space-y-4">
<i class="text-4xl fa-solid fa-pen-to-square"></i>

<h1 className="text-3xl">Data Structure & Algorithms</h1>
    <p>
    Data structures and algorithms (DSA) are essential for solving complex problems efficiently. They involve organizing data and implementing methods for data manipulation and retrieval. Mastery of DSA allows developers to optimize performance and ensure code efficiency.
    </p>
    <button className=" cursor-pointer px-3 py-2 bg-orange-600 rounded-full shadow-lg">Check here</button>
</div>
</div>
    </div>
    
    </>
}
export default Services; 