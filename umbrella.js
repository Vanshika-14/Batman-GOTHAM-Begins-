class Umbrella {

    constructor(x,y,r){
        
        var options  = {isStatic : true}
        
        this.r = r;
        this.image = loadImage("images/walking_1.png")
        this.body = Bodies.circle(x,y,100,options);
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);

        fill(255);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();

    }

}