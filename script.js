
let count =0;
var valuedisplay =document.getElementById('value')
var incrementbtn = document.getElementById('inc')
var decrementbtn = document.getElementById('dec')
var setinput = document.getElementById('steps')
var resetbtn = document.getElementById('reset')

incrementbtn. addEventListener('click', function () {
    let step  = Number(setinput. value);
    count+= step;
    valuedisplay.innerHTML = count;

});
decrementbtn. addEventListener('click', function () {
    let step  = Number(setinput. value);
    count-= step;
    valuedisplay.innerHTML = count;

});
resetbtn.addEventListener('click', function (){
    count =0;
    valuedisplay.innerHTML = count;
    
})