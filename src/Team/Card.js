import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";



function Card({id, image, info, name,link1,link2,link3 }){
    
    

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-detail">
                    {/* <h4 className="tour-price"> {price}</h4> */}
                    <h4 className="tour-name"> {name}</h4>
                </div>
                <div className="description"> {info} 
                    
                </div>

                <div className="flex pl-5 pt-3">
                    <div className="p-2">
                        <Link to={link1} target="_blank"><FaInstagramSquare /></Link></div>
                    <div className="p-2">
                        <Link to={link2} target="_blank"><CiFacebook /></Link></div>
                    <div className="p-2">
                        <Link to={link3} target="_blank"><FaLinkedin /></Link></div>
                </div>
            </div>
        </div>
    );
}
export default Card;   