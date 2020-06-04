var drawing = [];
var database;
var db = [];
var button;

function setup() {
  createCanvas(1000,1000);
  database = firebase.database();
  //button = createButton("reset");
  //button.position(750,350);
}

function draw() {
  background(0);  
  Drawing();
  beginShape();
  noFill();
  stroke("white");
  strokeWeight(10);
  for(var i= 0; i<db.length; i++){
    vertex(db[i].x, db[i].y);
    endShape();
  }
  /*button.mousePressed(()=>{
    db = [];
    drawing = [];
    database.ref('drawing').remove();
  })*/
}

function mouseDragged(){
  var point = {x: mouseX, y: mouseY};
  drawing.push(point);
  database.ref('drawing').update({
    d: drawing
  });
}

function Drawing(){
  database.ref('drawing/').on("value", (data)=>{
    db = data.val().d;
  });
}