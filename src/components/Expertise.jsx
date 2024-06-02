import bannerBackground from "../assets/bn_5.png";

const Expertise=()=>{
    return (
<>
<div className="mt-8">
    <h1 className ="mb-16 text-5xl font-bold underline text-center"> My Expertise</h1>


<div 
style={
    {
        backgroundImage:`url(${bannerBackground})`,
        backgroundSize:"cover",
    }}
className="box-container flex py-16 align-items-center">
    <div className="flex justify-center">{/*text container*/}
    <div className="w-2/3 text-center space-y-3"><h1 className="text-4xl text-white font-semibold">I have command in these technologies</h1>
    <p className="text-white">Expertise in Java, HTML, CSS, JavaScript, React.js, Node.js, SQL, and Tailwind CSS is invaluable. Java provides robust backend capabilities. HTML structures web content, while CSS styles it. 
        <button className="text-1xl px-3 py-2 bg-orange-600 rounded-full shadow-lg">Hire me</button>
    </p>
    </div>
    </div>
    <div >{/*skills container*/}
    <div className="flex-wrap space-x-4 space-y-3 flex w-2/3">
    <p className="bg-gray-400 w-fit px-3 py-2 mt-2 hover:bg-orange-400 cursor-pointer rounded-full">Core Java</p>
    <p className="bg-gray-400 w-fit px-3 py-2 mt-2 hover:bg-orange-400 cursor-pointer rounded-full">HTML</p>
    <p className="bg-gray-400 w-fit px-3 py-2 mt-2 hover:bg-orange-400 cursor-pointer rounded-full">CSS</p>
    <p className="bg-gray-400 w-fit px-3 py-2 mt-2 hover:bg-orange-400 cursor-pointer rounded-full">JavaScript</p>
    <p className="bg-gray-400 w-fit px-3 py-2 mt-2 hover:bg-orange-400 cursor-pointer rounded-full">Bootstrap</p>
    <p className="bg-gray-400 w-fit px-3 py-2 mt-2 hover:bg-orange-400 cursor-pointer rounded-full">Node.js</p>
    <p className="bg-gray-400 w-fit px-3 py-2 mt-2 hover:bg-orange-400 cursor-pointer rounded-full">C</p>
    <p className="bg-gray-400 w-fit px-3 py-2 mt-2 hover:bg-orange-400 cursor-pointer rounded-full">SQL</p>
    <p className="bg-gray-400 w-fit px-3 py-2 mt-2 hover:bg-orange-400 cursor-pointer rounded-full">React.js</p>
    <p className="bg-gray-400 w-fit px-3 py-2 mt-2 hover:bg-orange-400 cursor-pointer rounded-full">TailwindCSS</p>

    

    
    </div>
    </div>
    <div
    
    >
    
    {/*box section*/}
    </div>

</div>
</div>

</>

    )
}
export default Expertise