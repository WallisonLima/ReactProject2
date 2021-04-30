import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './headrStyle.css'




export const Headr = () => {
    return (
        <div className='containerHeadr'>
            <div className='headr'>
                <div className='itemLeft'>
                    <text>SUBSCRIBE</text>
                </div>
                <div className='namePage'>
                    <text>Blog</text>
                </div>
                <div className='itemRigth'>
                    <i className='icons'> <FontAwesomeIcon icon={faSearch} /> </i>
                    <button className='button'>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}