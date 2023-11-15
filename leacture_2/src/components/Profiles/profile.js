// This is an example of nexting conponents

function Profiles(){
    return (
    <>
    <img src='http://placekitten.com/150/150' alt="Meow" />
    </>
    );
}


// Nesting my components

export default function Gallery(){
    return(
        <>
            <hr/>
            <h1>This is my first nesting component</h1>
            <Profiles></Profiles>
            <Profiles></Profiles>
            <Profiles></Profiles> 

        </>
    );
}