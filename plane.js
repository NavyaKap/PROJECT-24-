class Plane{
    constructor(x,y,width,height,color){
        
        var options={
            isStatic: true
            
        }
        this.width = width;
        this.height = height;

        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        this.color=color

        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push()
        rectMode(CENTER);
        fill(this.color);   
        rect(pos.x,pos.y,this.width,this.height)
        pop();

    }
    
}