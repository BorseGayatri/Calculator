
 
var no1;
var no2;
function dis(a)
{

document.getElementById("inval").value+=a;
}
 
function solve()
{
let x = document.getElementById("inval").value


if(x==""){
alert("u have not given the value");

}
else
{
let y=eval(x)
document.getElementById("inval").value=y
}
}
function clearme()
{
document.getElementById("inval").value="";

}
