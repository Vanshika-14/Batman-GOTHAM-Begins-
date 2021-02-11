const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var drops = [];
var engine, world, umbrella;

function preload(){
    image1 = loadImage("images/1.png");
    image2 = loadImage("images/2.png");
    image3 = loadImage("images/3.png");
    image4 = loadImage("images/4.png");
}

function setup(){

    createCanvas(800,700);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,570,300);

}

function draw(){

    background(0);

    Engine.update(engine);

    imageMode(CENTER);
    var rand = Math.round(random(1,30));
    if(rand === 1){
        image(image1,200,130,300,300);
    } else if (rand === 2){
        image(image2,200,130,300,300);
    } else if (rand === 3){
        image(image3,200,130,300,300);
    } else if (rand === 4){
        image(image4,200,130,300,300);
    }

    umbrella.display();

    if (frameCount % 1 === 0){
        drops.push(new Drops(random(0,800),random(-800,-10),3));
    }

    for (var c = 0 ; c < drops.length ; c++){
        drops[c].display();
        drops[c].update();
    }
    
}
