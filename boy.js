class Boy{

    constructor(x,y,width,height){
        var options ={
            isStatic: false,
            restitution: 0.8,
            friction: 1,
            density: 2
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/boy.png");
        World.add(world, this.body);
    }

    display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y); 
            rotate(angle); 
            fill("white");
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height); 
            pop(); 
    }
}