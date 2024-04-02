
let circleX, circleY;
let circleSize = 100;
let dragging = false;
let offsetY;
let squareSize = 50;
let originalSize = 50;
let growthRate = 1; 
let squares = []; // Array to store squares
let colors = []; // Array to store colors for squares





/*class Moveable{
    constructor(x, y, w, h, r, g, b){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.r = r;
        this.g = g;
        this.b = b;
        this.scaleAmt = 1;
        this.isDragging = false;
    }
    show(){
        fill(random(255), random(255), random(255))
        noStroke();
        rect(this.x, this.y, this.w, this.h)
    }

    show2(){
        fill(1, 48, 10)
        noStroke();
        ellipse(this.x, this.y, this.w, this.h)
    }

    show3(){
        fill(0,0,0)
        noStroke();
        rect(this.x, this.y, this.w, this.h)
        
    }
    scaled(){
        if(mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h){
            this.w = this.w + this.scaleAmt;
            this.h = this.h + this.scaleAmt;

            fill(this.r, this.g, this.b)
            noStroke();
            rect(this.x, this.y, this.w, this.h)
            //this.scaleAmt = this.scaleAmt + 1
            this.scaleAmt++}
}


    showimg(){
        image(gridImage, this.x, this.y, this.w, this.h)
}

    scaleimg(){
        if(mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h){
            this.w = this.w + this.scaleAmt;
            this.h = this.h + this.scaleAmt;
            image (gridImage, this.x, this.y, this.w, this.h) }
}

    newshape(){
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h){
        fill(110, 43, 59)
        rect(620, 300, 200, 200)}
}


    drag(){
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h){
            this.isDragging = true;
            this.y = this.y + 10;
            ellipse(this.x, this.y, this.w, this.h)
            //console.log("drag-detect")
            console.log(this.y)
            rect(this.x - 500, this.y - 100, 100 + this.y, 100 + this.y)

        }
    }


    released(){
        this.isDragging = true;
    }
}*/

function setup (){
    createCanvas (1425, 800)
    background (122, 128, 191)
    colorMode(RGB)
    frameRate(90)

    circleX = width / 1.09;
    circleY = height / 6;
    
  /*  bar = new Moveable (1350, 25, 30, 750, 171, 167, 108)
    circle = new Moveable (1380, 100, 100, 100, 145, 52, 80)
    shape3 = new Moveable (30, 100, 200, 200, 145, 52, 80)

    

    bar.show3()
    circle.show2() */
  
}


var i = 0;
var p = 0;
function draw (){

  /*  bar.show3()
    circle.show2()


        //shape.scaled();
        circle.newshape();
        //bar.scaled();
        shape3.scaleimg();

        textSize(30); 
        textAlign(CENTER, CENTER);
        text("Drag the circle down", width/2, height/2);
        noStroke

    while (i <100){
        fill(123, 107, 156)
        stroke(225)
        strokeWeight(4)
        rect(100 * i, 200, 200)
        i++
    }*/


background (122, 128, 191);
  if (dragging) {
    circleY = mouseY + offsetY;
  }
  ellipse(circleX, circleY, circleSize);

  let squareGrow = max(0, circleY - height / 5) * 6.5; 
  //squareSize = constrain(1 + squareGrow, 700, 100000); 
  //updateSquares(squareGrow);
  let originalSize = 50 + squareGrow * 0.5; 
  let originalColor = color(30, 74, 30); 
  drawSquare(width / 2, height / 2, originalSize, originalColor);


  
  if (originalSize >= 100) { // Adjust this threshold as needed
  let secondSize = originalSize * 0.2; 
  let secondColor = color(92, 43, 140); 
  let insideOffset = originalSize * 0.2; // Adjust the inside offset as needed
  let secondX = width / 2;
  let secondY = height / 2;
  if (originalSize >= 100) {
    secondX += 2; 
    secondY += 2;
    secondY += insideOffset * (originalSize - 100) / 200; // Adjust this factor as needed

    drawSquare(secondX, secondY, secondSize, secondColor);
  }
 
  /*if (originalSize >= 75) { // Adjust the threshold as needed
    let secondSize = originalSize; // Adjusting size for the second square
    let secondColor = color(92, 43, 140); // Blue color for the second square
    drawSquare(width / 2, height / 2, secondSize, secondColor); */

 /* for (let i = 0; i < squares.length; i++) {
    let size = squares[i];
    let color = colors[i];
    fill(color);
    let borderWeight = 2; // Set the thickness of the border
    stroke(1); // Set the color of the border
    strokeWeight(borderWeight);
    rectMode(CENTER);
    rect(width / 2, height / 2, size, size);
  } */
  
  //square
  rectMode(CENTER);
  rect(width / 2, height / 2, 100 + squareGrow, 100 + squareGrow);
  
  //circle
  if (dragging) {
    circleY = mouseY + offsetY;
  }
  fill (1)
  ellipse(circleX, circleY, circleSize);

}
}
/*function updateSquares(grow) {
    squares = [];
    colours = [];
    let numSquares = int(map(grow, 0, height / 2, 1, 5)); // Number of squares based on circle position
    for (let i = 0; i < numSquares; i++) {
        squares.push(50 + grow / numSquares * (i + 1)); // Adjusting size for each square
        let c = color(random(255), random(255), random(255)); // Generate a random color
        colors.push(c);
    }
  }*/



  function drawSquare(x, y, size, fillColor) {
    fill(fillColor);
    rectMode(CENTER);
    rect(x, y, size, size);
  }




function mousePressed() {
    let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < circleSize / 2) {
    dragging = true;
    offsetY = circleY - mouseY;
  }

  }
  
  function mouseReleased() {
    dragging = false;
  }

/*function mouseDragged(){
    circle.drag()
}*/

/*function mouseClicked() 
    if (p <100){
        fill (107, 156, 154)
        stroke(225)
        strokeWeight (4)
        rect(100 * p, 500, 200)
        p++;
    }

    

 function mouseDragged() {
        //background(107, 156, 114)
        fill(random(255),random(255), random(255))
        strokeWeight(1)
        ellipse (mouseX, mouseY, random(300))
    
    }


 function mouseWheel() {
        fill(225)
        noStroke();
        rect (width / 2, mouseY, 100, 100)
    }

    function mouseMoved() {
        fill(0)
        stroke(225);
        strokeWeight(2)
        rect (width / 2, mouseY, 100, 100)
    }


 var k = 0;
    function keyPressed() {
        if (keyCode == LEFT_ARROW){
            background (0);
        }

        if (keyCode == RIGHT_ARROW){
            background (225);
        }

        if (k < 100){
            if (key == 'a'){

                noFill();
                textFont('Courier New')
                strokeWeight(2)
                stroke(9)
                textSize(200)
                text(key, 100 * k, 100)
            }
            k++
        }

    }
*/
    