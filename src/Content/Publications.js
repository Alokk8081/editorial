import React from "react";
import datapub from "./datapublic";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./publication.css"
import { Link } from "react-router-dom";

// const links = [
//     'https://drive.google.com/file/d/1U9pXifE4ccA6D7jHSwqzxvZK2GVD5ZNn/view?usp=drive_link',
//     'https://drive.google.com/file/d/1Y-djlEj5McbhjjXLuSeJjJXjZ-6mkHZ-/view?usp=drive_link'
// ]

function Publications() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    return (
        <div className="p-5 ">
            {/* Title Section */}
            <div className="text-3xl font-bold text-white mb-5 p-1 text-center">
                <p>Tiresia</p>
                <p>Malvika</p>
            </div>

            {/* Cards Section */}
            <div className="flex gap-8 justify-center ">
            <Slider className="px-5 w-[60vw]" {...settings}>
                {datapub.map((d,index) => (
                    <div
                        key={d.id}
                        className="bg-gray-800 rounded-lg shadow-lg transition-transform px-5 py-3 duration-100 flex flex-col items-center justify-center hover:translate-y-2 h-[65vh]
                        "
                    >
                        {/* Card Image */}
                        <img
                            src={d.image}
                            alt={d.name}
                            className=" object-cover rounded-t-lg w-[15vw]"
                        />
                        {/* Card Content */}
                        <div className="p-4 text-center">
                            <p className="text-base font-bold text-gray-500">{d.name}</p>
                            <p className="text-sm text-gray-500">{d.info}</p>
                            <button className="mt-1 px-1 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-700">
                                <Link to={d.link} target="_blank"> Click to Read </Link>
          
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
            
        </div>
    );
}

export default Publications;
