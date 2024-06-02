import bannerImage from '../assets/about_3.png';

const About=()=>{
    
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
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto quaerat, voluptates autem aperiam minima natus nam reprehenderit cumque enim!
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam libero dolorum sed numquam dolore esse aliquam, animi sunt nulla accusantium dicta minima sit, alias blanditiis dolores, repellat temporibus rerum molestias</p>
  <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg cursor-pointer">Read More..</button>
  </div>
  
        </div>
    </div>

</div>

    </>)
}
export default About;