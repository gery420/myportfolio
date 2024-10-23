
function scroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop/scrollHeight) * 100;

    if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
        scrollPercent = 100;
    }

    document.getElementById('time').innerHTML=`${Math.round(scrollPercentage)}`;
}

window.addEventListener('scroll', scroll);
