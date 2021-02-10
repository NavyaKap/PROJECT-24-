class Sand{
    constructor(x,y,radius){
      var options={
            restitution:0.3,
            friction: 5,
            density:1.0,
            // isStatic:false
        }
        this.x=x;
        this.y=y;
       this.radius=radius;
        this.sand = Bodies.circle(100,50,20,options);
        World.add(world,this.sand);
        console.log(this.sand)

    }
  
    display(){
        var pos=this.sand.position;
        var angle=this.sand.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke('blue');
        fill(225);
        ellipse(0,0,this.radius,this.radius);
        pop();
     
     }
      }
  