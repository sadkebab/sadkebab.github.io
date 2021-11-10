AWAIT_NO_IMG_MS=500;

document.addEventListener("DOMContentLoaded", function(event) { 
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

