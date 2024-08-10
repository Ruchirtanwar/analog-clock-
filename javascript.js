const resetButton = document.getElementById('resetbutton');

function updateClock(){
    d= new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}


setInterval(updateClock, 1000);

function resetClock() {
    const resetTime = new Date();
    resetTime.setHours(12);
    resetTime.setMinutes(0);
    resetTime.setSeconds(0);

    const hrotation = 30 * resetTime.getHours() + resetTime.getMinutes() / 2;
    const mrotation = 6 * resetTime.getMinutes();
    const srotation = 6 * resetTime.getSeconds();
    
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}
resetButton.addEventListener('click', resetClock);
updateClock();
