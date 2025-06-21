
function scroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop/scrollHeight) * 100;

    if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
        scrollPercent = 100;
    }

    if (scrollPercentage<0){
        scrollPercentage = 0;
    }

    if (scrollPercentage>100){
        scrollPercentage = 100;
    }

    document.getElementById('time').innerHTML=`${Math.round(scrollPercentage)}`;
}

window.addEventListener('scroll', scroll);
