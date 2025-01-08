import React from "react";

function About(){
    return(
        <div className="flex-col ">
            <div className="w-full flex justify-center">
                <span className="text-white font-mono text-4xl font-bold underline mt-3">About Us</span>
            </div>
            
            {/* <div className="">
                <p className="text-white text-2xl" style={{fontFamily: 'Alba,sans-serif'}}>The Editorial Board</p>
                <p className="text-white pl-[70px]">- Beckoning Creati‘wit’y</p>

            </div> */}

            <div className="w-full flex justify-center">
                <div className="h-[50vh] w-[60vw] flex text-sm justify-center mt-4 ml-6 p-3  bg-white/10 border border-white/20 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 cursor-pointer mx-3">
                <p>Throughout its enduring journey of more than five decades, The Editorial Board has played a crucial 
                    role in shaping and grooming the University’s literary and intellectual landscape. The Editorial Board 
                    has brilliantly disseminated the writings by the numerous scholars and faculty, as well as the students 
                    through its publications. The Editorial Board, under the literary Sub-Council of CSA, perpetuates the 
                    college’s intellectual standards and supports campus community development by fostering open discus
                    sion and imaginative thinking.</p>
                </div>

            </div>

            <div className="w-[100vw] flex justify-center font-serif font-bold underline ">
                <span className="text-white p-3 text-4xl ">Our Events </span>
            </div>

            <div className="p-3 flex w-full justify-center">
                <div className="h-[40vh] w-[20vw] flex text-sm justify-center mt-4 ml-6 p-3  bg-white/10 border border-white/20 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 cursor-pointer mx-3"><span>Vaagmita</span></div>
                <div className="h-[40vh] w-[20vw] flex text-sm justify-center mt-4 ml-6 p-3  bg-white/10 border border-white/20 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 cursor-pointer mx-3"><span>Arunodaya</span></div>
                <div className="h-[40vh] w-[20vw] flex text-sm justify-center mt-4 ml-6 p-3  bg-white/10 border border-white/20 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 cursor-pointer mx-3"><span>Abhyudaya</span></div>

            </div>
                
            

        </div>
    )

}
export default About;