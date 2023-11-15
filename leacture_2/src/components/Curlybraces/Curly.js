export default function Curly(){
    const image = "https://placewaifu.com/image/200/200"; 
    const alternative  = "Anime waifu"
    return(
        <>
        <hr/>
        <h1>Jsx with curly braces</h1>
        <img 
            // here  you can add value by add { }, in place or " " 
            src = {image} 
            alt= {alternative} 

        />

        </>
    )
}