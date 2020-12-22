function detectCollision(object1,object2){
	
	pos1 = object2.body.position
	pos2 = object1.body.position
  
	
    var distance=dist(pos2.x,pos2.y,pos1.x,pos1.y);

	if (distance < object2.radius + object1.radius){

	   Matter.Body.setStatic(object2.body , false);

    } 
}