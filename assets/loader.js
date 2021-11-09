document.addEventListener("DOMContentLoaded", function(event) { 
    var imgs = document.images,
        len = imgs.length,
        counter = 0;

    for(i=0; i<len; i++){
        if (imgs[i].complete)
            incrementCounter();
        else
            imgs[i].addEventListener('load', incrementCounter, false);
    }


    function incrementCounter() {
        counter++;
        if (counter === len) {
            target=document.getElementById("loader-wrapper");
            target.style.opacity = '0';
            target.addEventListener('transitionend', () => target.remove());
            document.getElementById("main-wrapper").style.display='block';
        }
    }
});