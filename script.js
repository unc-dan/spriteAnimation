var tID; 
function animateScript() {
var    position = 32; 
const  interval = 100;
tID = setInterval ( () => {
document.getElementById("image").style.backgroundPosition = 
`-${position}px 0px`; 

if (position < 192)
{ position = position + 32;}

else
{ position = 32; }
}
, interval ); 
} 


function stopAnimate() {
clearInterval(tID);
}
