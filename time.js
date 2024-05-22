document.addEventListener('DOMContentLoaded', () => {
    function checkTime(i) {
        if (i < 10) {
        i = "0" + i;
        }
        return i;
    }

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function() {
            startTime()
        }, 500);
    }
    startTime();

    function greetings() {
        var t = new Date();
        var hours = t.getHours();

        if ((hours>=0) && (hours<12)){
            document.getElementById('welcome').innerHTML = 'Good Morning';
        } else if (hours==12) {
            document.getElementById('welcome').innerHTML = 'Happy Midday';
        } else if ((hours>12)&&(hours<=17)){
            document.getElementById('welcome').innerHTML = 'Good Afternoon';
        } else if ((hours>17)&&(hours<=24)){
            document.getElementById('welcome').innerHTML = 'Good Night';
        } else {
            document.getElementById('welcome').innerHTML = 'Welcome';
        }
    }
    greetings();

    // script.js
// script.js
    window.onload = function() {
        const progressBar = document.getElementById('barID');

        function resetProgressBar() {
            progressBar.style.width = '0';
            setTimeout(() => {
                progressBar.style.width = '32vw';
            }, 1); // Delay the reset to ensure the transition restarts
        }

        // Initially set the progress bar width to start animation
        progressBar.style.width = '32vw';

        // Set interval to reset progress bar every 60 seconds
        setInterval(resetProgressBar, 60000);
    };


});
