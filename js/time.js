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

        if (((hours>=21) && (hours<24)) || (hours>=0) && (hours<4)){
            document.getElementById('greet').innerHTML = 'Good Night!';
        } else if ((hours>=4)&&(hours<12)){
            document.getElementById('greet').innerHTML = 'Good Morning';
        } else if ((hours>=12)&&(hours<16)){
            document.getElementById('greet').innerHTML = 'Good Afternoon';
        }else if ((hours>=16)&&(hours<20)){
            document.getElementById('greet').innerHTML = 'Good Evening';
        }else if ((hours>=20)&&(hours<21)){
            document.getElementById('greet').innerHTML = 'Hope you had a <br>Good Day!';
        } else {
            document.getElementById('greet').innerHTML = 'Welcome';
        }
    }
    greetings();

});
