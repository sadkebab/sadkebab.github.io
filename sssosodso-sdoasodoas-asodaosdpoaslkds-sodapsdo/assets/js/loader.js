AWAIT_NO_IMG_MS=500;
COOMODORE_BASE_TOP=null;
COOMODORE_BASE_LEFT=null;
ROCKET_BASE_TOP=null;
ROCKET_BASE_LEFT=null;
ROCKET_BASE_DEGREE=12;
STARMAN_BASE_TOP=null;
SATELLITE_BASE_LEFT=null;

document.addEventListener("DOMContentLoaded", function(event) { 
    SATELLITE_BASE_LEFT=parseInt($("#satellite").css('left').replace('px',''));
    COOMODORE_BASE_TOP=parseInt($("#commodore").css('top').replace('px',''));
    COOMODORE_BASE_LEFT=parseInt($("#commodore").css('left').replace('px',''));
    ROCKET_BASE_TOP=parseInt($("#rocket").css('top').replace('px',''));
    ROCKET_BASE_LEFT=parseInt($("#rocket").css('left').replace('px',''));
    STARMAN_BASE_TOP=parseInt($("#starman").css('top').replace('px',''));

    var imgs = document.images,
        len = imgs.length,
        counter = 0;

    async function waitForImgs(){
        if(len===0){
            await new Promise(resolve => setTimeout(resolve, AWAIT_NO_IMG_MS));
            stopLoading();
        }

        for(i=0; i<len; i++){
            if (imgs[i].complete)
                incrementCounter();
            else
                imgs[i].addEventListener('load', incrementCounter, false);
        }

    }
    
    waitForImgs();

    function incrementCounter() {
        counter++;
        if (counter === len) {
            stopLoading()
        }
    }

    function stopLoading(){
        target=document.getElementById("loader-wrapper");
        target.style.opacity = '0';
        target.addEventListener('transitionend', () => target.remove());
        document.getElementById("main-wrapper").style.display='block';
    }
});

