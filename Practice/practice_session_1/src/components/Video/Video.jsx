function Video(){
    let image_place_holder = "https://placebear.com/640/360";
    return(
        <>
        <img
            src = {image_place_holder}
            alt = "Placeholder" 
        />
        <div>Title</div>
        <div>Channel</div>
        <div>Views</div>
        </>

    )

}

export default Video;