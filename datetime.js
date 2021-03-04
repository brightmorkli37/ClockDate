let ctime = document.getElementById('time');
let cdate = document.getElementById('date');

var make_date = new Date();

cdate.innerHTML = make_date.toDateString();

 
function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
var x = new Date()
var x1=x.toTimeString();
document.getElementById('time').innerHTML = x1;
tt=display_c();
 }



