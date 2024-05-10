function setup() {
    createCanvas(1360, 768);
    background("white");
  }
  
  function draw() {
    
    stroke ("black");
    fill ("blue");
    
    if (mouseIsPressed) {
    rect (mouseX, mouseY, 20, 35);
    }
  }