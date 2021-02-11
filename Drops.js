class Drops {

    constructor(x,y,r){

        var options = {
            friction:0.1,
            isStatic:false,
            restitution:0.4,
            density:1.2
        }

        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);

    }

    update(){
        if(this.body.position.y > 690){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:690})
            Matter.Body.setStatic(this.body,true)
        }
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);

        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

    }
    
}