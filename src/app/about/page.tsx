import Image from "next/image";
import mypicture from "../../../public/gray-scarf.png"
export default function About() {
    return (
       
        ///////////////Light side///////////////////////////////////////
        <div className="about bg-gradient-to-t from-gray-300 to-gray-600">
            <div className="about-img  sm:w-1/3" >
              
            
                <Image className=" "
                    src={mypicture}
                    alt="picture"
                    width={300}
                    height={350}
                  
                />
            </div>
        
            {/* right side///////////////////////////////////////////// */}

            <div className="about-contant">
            
             <h1 className="about-h1">About Me</h1>
             <p className="about-p text-sm sm:text-base px-6">Hello I am Uzma Fateh, <br />A highly skilled front-end web developer with 5+ years of experience in building responsive , user friendly interfaces for web applications. Proficient in HTML, CSS3, JavaScript, and popular frame work like React.js next.js and Angular. Passionate about staying up to date with the latest industry trends and technologies.</p>
        </div>
        </div>

    );
}