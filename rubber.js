class Rubber{
    constructor(x,y,radius){
      var options={
            restitution:0.8,
            friction: 1,
            density:1.0,
            isStatic:false
        }
        this.x=x;
        this.y=y;
       this.radius=radius;
        this.rubber = Bodies.circle(200,100,20,options);
    World.add(world,this.rubber);
    console.log(this.rubber)

    }
  
    display(){
        var pos=this.rubber.position;
        var angle=this.rubber.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke('green');
        fill(255);
        ellipse(0,0,this.radius,this.radius);
        pop();
        }
  }
  
  