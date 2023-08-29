// alert("hey!!!");
let countDate= new Date('Auguest 24, 2023 00:00:00').getTime();
function CountDown(){
    let now = new Date().getTime();
    gap = countDate-now;

    let second=1000;
    let minute= second*60;
    let hour = minute *60;
    let day = hour*24;

    let d= Math.floor(gap/(day));
    let h= Math.floor((gap %(day))/(hour));
    let m= Math.floor((gap %(hour))/(minute));
    let s= Math.floor((gap %(minute))/(second));


    document.getElementById('hour').innertext = h;
    document.getElementById('day').innertext = d;
    document.getElementById('minute').innertext = m;
    document.getElementById('second').innertext = s;

}

setInterval(function(){
    CountDown();
},1000)