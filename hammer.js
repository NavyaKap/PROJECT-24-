class Hammer{
    constructor(x,y){
        var options={

            'density'    : 2,
            'restitution': 0.5,
            'friction'   : 1
            
        }
    
        this.width=170;
        this.height=35;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world, this.body);
    }
  
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;

        var angle=this.body.angle;

       push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("white")
        fill("orange");       
        rect(0,0,this.width,this.height);
        pop();
        }
  }
  