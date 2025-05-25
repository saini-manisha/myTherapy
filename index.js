let inervalid=null;
let radha=document.getElementById("radha");
function startPlaying(){
    const audio=new Audio("radha.mp3")
    console.log("hello");
    audio.play();
    radha.style.color="blue";

    inervalid=setInterval(() => {
        audio.play();
    }, 36000);
}

function stopPlaying(){
    if(inervalid!=null){
        clearInterval(inervalid);
        radha.style.color="green";

    }
}