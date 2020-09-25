let size = 10;

function setup() {
  createCanvas(500, 500);
  noFill();


  for(let i=0; i<200; i+=50){
    for(let j=0; j<250; j+=50){
     let size = (random(1, 50));
      rect(i, j, size, size);
    }           
  }
}


function draw() {
}
