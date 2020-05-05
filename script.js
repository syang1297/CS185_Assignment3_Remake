window.onscroll = function(){scrollToTop()};

function scrollToTop(){
    console.log("scrollToTop() called");
    var scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollPos > window.innerHeight/4){
        console.log("entered if");
        btn.className = "visible";
    }else{
        btn.classList.remove("visible");
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

function tabShow(tab){
    var active = document.querySelector(tab);
    console.log(tab);
    active.style.background = "rgba(150, 37, 80, 0.377)";
}

function imgShow(image){
    const img = document.createElement('img');
    box.className = "visible";
    img.src = image.src;
    while(box.firstChild){
        box.removeChild(box.firstChild);
    }
    box.appendChild(img);
}

function imgExit(e){
    console.log("entered imgExit");
    if(e.currentTarget != e.target){
        console.log("entered if");
        return;
    }else{
        console.log("entered else");
        box.classList.remove("visible");
    }
}
