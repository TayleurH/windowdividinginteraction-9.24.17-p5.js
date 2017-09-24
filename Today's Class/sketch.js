function setup(){
createCanvas(600,500);   
background(200);


}

function draw (){

background(200);


if(mouseIsPressed){

fill(0,128,129);
rect(0,0,250,150);

}



 if(mouseX>200){
   fill(40,19,240);
    rect(250,0,600,600);
  }

if(mouseY>200){
   fill(250,3,23);
    rect(0,150,250,400);
  }

if(mouseX==400){
background(250, 210, 2);
line(400,0,400,600); 
 }



}	

