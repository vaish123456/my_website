import {useState} from "react";


const Header=()=>{

const [brandName,setBrandName]=useState("Vaishnavi Singh");
const [menuLinks,setMenuLinks]=
useState([
    {
        title:"Home",
        link:"/home",
        id:1,
    },
    {
        title:"About",
        link:"/about",
        id:2,
    },
    {
        title:"Skills",
        link:"/skills",
        id:3,
    },
    {
        title:"Portfolio",
        link:"/portfolio",
        id:4,
    },
    {
        title:"Contact",
        link:"/contact",
        id:5,
    },
    
]);
const [actionButton,setActionButton]=useState({
    title:"Hire Me",
    link:"/hire-me"
})

    return (
    
    
    
    <>
    <div className="h-10 border main flex justify-between items-center px-16 bg-gray-200">

        <div>
    {/* brand logo */}
    <h1 className="text-2xl font-bold"> {brandName}</h1>
    
        </div>
        <div className="space-x-6">
            {/* menu links */}
            
               { menuLinks.map(link=>(
                <a key={link.id}href="{link.link}" className="hover:text-blue-500">{link.title}</a>
               ))}
            
            {/*
            
            <a href="/home" className="hover:text-blue-400">
                Home
            </a>
            <a href="/about"className="hover:text-blue-400">
                About
            </a>
            <a href="/skills"className="hover:text-blue-400">
                Skills
            </a>
            <a href="/Portfolio" className="hover:text-blue-400">
                Portfolio
            </a>
            <a href="/contact" className="hover:text-blue-400">
                Contact
            </a>*/}
            
        </div>

        <div>
            {/* buttons */}
            <a href ={actionButton.link}className="px-4 py-2 bg-pink-400 shadow rounded-full text-1x">{actionButton.title}</a>
        </div>

    </div>
    
    </>



)
};
export default Header;