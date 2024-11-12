import Image from "next/image";
import grayScarf from "../../public/gray-scarf.png"

export default function Home() {
  return (
    <div className="hero sm:flex md:flex-row justify-between     
       bg-gradient-to-b from-gray-600 to-gray-950">

         <Image className="rounded-3xl mx-auto sm:-ml-24 md:-ml-6"
        src={grayScarf}
        alt=""
        height={220}
        width={210} />

         <p className=" py-10 w-[40%] text-center   mx-auto sm:-ml-2 text-xl  md:text-2xl lg:text-3xl sm:hover:text-xl md:hover:text-2xl  lg:hover:text-3xl 

        ease-linear   text-yellow-50 "><br /><br />Transforming
        your ideas into
        immersive  digital Experiences</p>
        
    </div>);
    
}

