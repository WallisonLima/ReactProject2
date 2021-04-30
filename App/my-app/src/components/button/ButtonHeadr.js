
import './buttonStyles.css'

const writeButton = (item) =>{
    return(
        <div className='itemOptions'>{item}</div>   
    )
}

export const ButtonHeadr = ({options}) =>{
    return(
        <div className='containerHeadrOptions'>
            {options && (
                options.map((option)=> writeButton(option))) 
            }
        </div>
    );
}