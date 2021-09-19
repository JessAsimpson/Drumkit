let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");




    
document.addEventListener("keydown", (a) =>{
    if( a.key == "a"){
        boom.pause();
        boom.currentTime = 0;
        boom.play();
    }   
    if(a.key == "s"){
        clap.pause();
        clap.currentTime =0;
        clap.play();
    }
    if(a.key == "d"){
        hihat.pause();
        hihat.currentTime = 0;
        hihat.play();

    }
    if(a.key == "f"){
        kick.pause();
        kick.currentTime = 0;
        kick.play();

    }
    if(a.key == "g"){
        openhat.pause();
        openhat.currentTime = 0;
        openhat.play();

    }
    if(a.key == "h"){
        ride.pause();
        ride.currentTime = 0;
        ride.play();

    }
    if(a.key == "j"){
        snare.pause();
        snare.currentTime = 0;
        snare.play();

    }
    if(a.key == "k"){
        tink.pause();
        tink.currentTime = 0;
        tink.play();

    }
    if(a.key == "l"){
        tom.pause();
        tom.currentTime = 0;
        tom.play();

    }
})
