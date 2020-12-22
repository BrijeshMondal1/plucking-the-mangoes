class Rock{

    constructor(x,y,radius){

        var options = {

        restitution: 0.2,
        friction: 0.1,
        density: 5

        }

        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,options);
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);
    }

    display(){

     var pos = this.body.position;

     push();
     imageMode(CENTER);
     image(this.image, pos.x, pos.y , this.radius * 2, this.radius * 2);
     pop();

    }
}