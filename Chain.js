class Chain{

    constructor(bodyA, x, y){
      
      var options = {

        bodyA: bodyA,
        pointB: { x: x, y: y},
        stiffness: 0.06,
        length: 1

      }

      this.chain = Constraint.create(options);
      World.add(world, this.chain);

    }

    display(){

        if(this.chain.bodyA){
            
            var pos1 = this.chain.bodyA.position;
            var pos2 = this.chain.pointB;
    
            strokeWeight(4);
            line(pos1.x, pos1.y , pos2.x, pos2.y);
            
        }

    }

    fly(){

       this.chain.bodyA = null;

    }

    attach(bodyA){

      this.chain.bodyA = bodyA;
    }

}