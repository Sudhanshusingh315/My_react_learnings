import './Video.css' 
import BetterButton from '../BetterButton/BetterButton';
export default function Video({name,age,place,husband,married}){
    const imagePlaceHolder = `https://placewaifu.com/image/200`;  
    return(
        <>
            <div className='Container'>
                <img src= {imagePlaceHolder} alt="Place Holder Wifu"/>
                <div className='name'>Name of wifu: {name}</div>
                <div className='age'>Age: {age}</div>
                <div className='Place'>Place: {place}</div>
                <div>married: {married ? "👰‍♀️" : "🤵🏻‍♀️"}</div>
                <BetterButton>{name}</BetterButton>
            </div>
            
        </>
    )
    
}