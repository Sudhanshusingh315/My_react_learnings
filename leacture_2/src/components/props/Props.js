
export default function Props({title}){
    const animaterImage = 'https://placewaifu.com/image/200' 
    return(
        <>
        <hr/>
        <h1>{title}</h1> 

        <img
            src = {animaterImage}
            alt = "animater anime wifu" 
        />
        </>
        
    )    
}