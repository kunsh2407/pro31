class Drops{
    constructor(x,y,radius){
        var options ={
             restitution:0.1,
             friction:0.001
        }
    
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    this.radius=radius;
    

    }
    display(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x: random(0,400),y: random(0,400)})
        }
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        stroke("darkblue");
        strokeWeight(5);
        ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
}    