// form validation
function validateForm(){

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;

if(name==""){
alert("Name cannot be empty");
return false;
}

if(email==""){
alert("Email cannot be empty");
return false;
}

return true;

}


// change background color
function changeColor(){

var colors=["lightblue","lightgreen","lightyellow","lightpink"];

var random=colors[Math.floor(Math.random()*colors.length)];

document.body.style.backgroundColor=random;

}


// display calendar
function showCalendar(){

var month=document.getElementById("month").value;
var year=document.getElementById("year").value;

var firstDay=new Date(year,month).getDay();

var days=new Date(year,parseInt(month)+1,0).getDate();

var table="<table border='1' align='center'>";
table+="<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

for(var i=0;i<firstDay;i++){
table+="<td></td>";
}

for(var d=1;d<=days;d++){

if((d+firstDay-1)%7==0){
table+="</tr><tr>";
}

table+="<td>"+d+"</td>";

}

table+="</tr></table>";

document.getElementById("calendar").innerHTML=table;

}
