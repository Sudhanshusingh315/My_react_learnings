import './PlayButton.css'

// here i have passed onClick function as a prop simply because we can do that in JS
function PlayButton({message,children,onPlay,onPause}){
    let playing = false; // don't use this apporach, we will learn to fix this in future

    function handleClick(e){
        e.stopPropagation();
        if(playing){
            onPause();
        } 
        else{
            onPlay();
        }
        // toggling playing and now playing
        playing =!playing;
    }
    return(
        <button onClick={handleClick}>{children}</button>
    ) 

}

export default PlayButton;