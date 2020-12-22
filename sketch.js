
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var villageImg, cloudImg;
var boyImg, mangoImg, treeImg;
var ground, stone, chain;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var bird, birdImg;

function preload(){
	
   boyImg = loadImage("sprites/boy.png");
   mangoImg = loadImage("sprites/mango.png");
   treeImg = loadImage("sprites/tree.png");
   villageImg = loadImage("sprites/village.png");
   cloudImg =loadImage("sprites/cloud.png");
   birdImg = loadAnimation("sprites/1.png", "sprites/2.png", "sprites/3.png", "sprites/4.png", "sprites/5.png", "sprites/6.png", "sprites/7.png", "sprites/8.png", "sprites/9.png", "sprites/10.png", "sprites/11.png", "sprites/12.png", "sprites/13.png", "sprites/14.png", "sprites/15.png", "sprites/16.png", "sprites/17.png", "sprites/18.png");

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	cloud = createSprite(width / 2, 50, 200, 100);
	cloud.addImage(cloudImg);
	cloud.scale = 0.4;
	cloud.velocityX = -2;
	cloud.depth = -5;

	bird = createSprite(width/ 2 , height/4);
	bird.addAnimation("fly", birdImg);
	bird.scale = 0.05;
	bird.velocityX = - 2.5;
	bird.depth = - 1;

    ground = new Ground(width / 2, height - 50, width, 20);
	stone = new Rock(100, height /2, 30);
	chain = new Chain(stone.body, 140, height / 2 + 150);
	
	//creating mangoes
	mango1 = new Mango(width - 50, height / 2, 30);
	mango2 = new Mango(width - 150, height / 2 - 10, 30);
	mango3 = new Mango(width - 250, height / 2 - 20, 30);
	mango4 = new Mango(width - 350, height / 2 - 10, 30);
	mango5 = new Mango(width - 450, height / 2 - 40, 30);
	mango6 = new Mango(width - 140, height / 2 - 80, 30);
	mango7 = new Mango(width - 250, height / 2 - 90, 30);
	mango8 = new Mango(width - 340, height / 2 - 100, 30);
	mango9 = new Mango(width - 4000, height / 2 - 150, 30);
	mango10 = new Mango(width - 150, height / 2 - 130, 30);

	Engine.run(engine);
  
}


function draw() {
  
	rectMode(CENTER);
	background("skyblue");

	if(cloud.x < - 150){

		cloud.x = width + 100;
		cloud.y = Math.round(random(50,200));
 
	 }
	if(bird.x < - 100){

		bird.x = width + 100;
		bird.y = Math.round(random(50,200));
 
	 }

	image(villageImg, 0, 0, width, height);

	image(boyImg, 100, height / 2 + 80, 200, 270);
	
	drawSprites();

	image(treeImg, width - (width / 4 + 210), height / 2 - 250, width / 4 + 200, height / 2 + 200);

	
	chain.display();
	stone.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	detectCollision(stone,mango10);

}

function mouseDragged(){

   Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});

}

function mouseReleased(){
	
	chain.fly();
	
	setTimeout(function(){

		Matter.Body.setPosition(stone.body, {x:100, y:height/2});
		chain.attach(stone.body);

	},2000);

}

