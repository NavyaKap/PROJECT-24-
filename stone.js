class Stone{
    
    constructor(x,y){
    var options = {
        restitution:0.1,
        friction:1,
        density:5.0,
        isStatic:false 
   }
    this.x=x;
    this.y=y;
    //create the rectangular body
    this.body=Bodies.rectangle(this.x,this.y,50,50,options);
    this.width=50;
    this.height=50;

    //add the created body to the world
    
    
     World.add(world,this.body);
     
    }
    
    display(){
   
        var pos= this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();       
    }
}
