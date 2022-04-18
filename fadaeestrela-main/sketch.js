var starImg,bgImg,fadaImg;
var star, starBody,fada;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaImg = loadImage("images/fairyImage1.png");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fada=createSprite(100,507)
    fada.addImage(fadaImg);
    fada.scale=0.2

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
    background(bgImg);
  
    star.x=starBody.position.x
    star.y=starBody.position.y


    if(star.y > 470 && starBody.position.y > 470 ){
      Matter.Body.setStatic(starBody,true);
  }

  if (keyDown("d")){
      fada.x+=5
  }
  if (keyDown("a")){
    fada.x-=5
}
if (keyDown("s")){
    Matter.Body.setStatic(starBody,false)
}
  
  
    drawSprites();
  
  }
