let state = 0;
let x = 1;
let y = 2;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (state == 0) {
    background(0);
    noStroke();
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 50, 50);
  } 
  else if (state == x){
    background(0);
    noStroke();
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 50, 50);
  }
  else{
    background(0);
    noStroke();
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 50, 50);
}
}
function mousePressed() {
  if ( state == 0) {
    state = 1;
  } else if (state == x){
    state = y;
  }else{
    state = 0;
  }
}
    
  
