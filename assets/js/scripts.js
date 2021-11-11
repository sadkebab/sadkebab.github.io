function mobileMenuClick(x) {
    x.classList.toggle("change");
    document.getElementById("dropdown-menu").classList.toggle("show");
}



document.onscroll = function(){
    if(!navigator.userAgentData.mobile){
        offset=(window.pageYOffset/100.0);
        backgroundParallax='50% calc(50% - '+(offset*3)+'em)';
        document.getElementById("space-section").style.backgroundPosition=backgroundParallax;
    }
    

    //$("#satellite").css('left',(SATELLITE_BASE_LEFT+(offset*5))+'px');
    //$("#commodore").css('top',(COOMODORE_BASE_TOP+(offset*10))+'px');
    //$("#commodore").css('left',(COOMODORE_BASE_LEFT-(offset*10))+'px');
    //$("#starman").css('top',(STARMAN_BASE_TOP+(offset*5))+'px');
    
    $("#rocket").css('top',(ROCKET_BASE_TOP-(offset*100))+'px');
    degree=ROCKET_BASE_DEGREE+(offset*5.0);
    $("#rocket").css('left',(ROCKET_BASE_LEFT+(offset*3.8*degree))+'px');
    $("#rocket").css('transform','rotate('+(offset*9)+'deg)');

    // $("#rocket").css('top',(ROCKET_BASE_TOP-(offset*80))+'px');
    // $("#rocket").css('left',(ROCKET_BASE_LEFT+(offset*15.8))+'px');
    // $("#rocket").css('transform','rotate('+(offset*3)+'deg)');
};