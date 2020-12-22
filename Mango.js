class Mango{

    constructor(x,y,radius){

        var options = {

        isStatic: true,
        restitution: 0,
        friction: 1,
        density: 1

        }

        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,options);
        this.image = loadImage("sprites/mango.png");
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